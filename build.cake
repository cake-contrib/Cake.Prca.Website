#tool "nuget:https://api.nuget.org/v3/index.json?package=KuduSync.NET"
#tool "nuget:https://api.nuget.org/v3/index.json?package=Wyam&prerelease"
#tool "nuget:https://api.nuget.org/v3/index.json?package=gitreleasemanager"
#addin "nuget:https://api.nuget.org/v3/index.json?package=Cake.Git"
#addin "nuget:https://api.nuget.org/v3/index.json?package=Cake.Kudu"
#addin "nuget:https://api.nuget.org/v3/index.json?package=Cake.Wyam&prerelease"
#addin "nuget:https://api.nuget.org/v3/index.json?package=Cake.Yaml"
#addin "nuget:https://api.nuget.org/v3/index.json?package=Octokit"


using Octokit;

//////////////////////////////////////////////////////////////////////
// ARGUMENTS
//////////////////////////////////////////////////////////////////////

var target = Argument("target", "Default");

//////////////////////////////////////////////////////////////////////
// PREPARATION
//////////////////////////////////////////////////////////////////////

// Define variables
var isRunningOnAppVeyor = AppVeyor.IsRunningOnAppVeyor;
var isPullRequest       = AppVeyor.Environment.PullRequest.IsPullRequest;
var isMasterBranch      = StringComparer.OrdinalIgnoreCase.Equals("master", AppVeyor.Environment.Repository.Branch);
var accessToken         = EnvironmentVariable("WYAM_ACCESS_TOKEN");
var deployRemote        = EnvironmentVariable("WYAM_DEPLOY_REMOTE");
var deployBranch        = EnvironmentVariable("WYAM_DEPLOY_BRANCH");

// Define directories.
var releaseDir          = Directory("./release");
var addinDir            = releaseDir + Directory("addins");
var outputPath          = MakeAbsolute(Directory("./output"));
var rootPublishFolder   = MakeAbsolute(Directory("publish"));

// Definitions
class AddinSpec
{
    public string Name { get; set; }
    public string NuGet { get; set; }
    public bool Prerelease { get; set; }
    public List<string> Assemblies { get; set; }
    public string RepositoryOwner { get; set; }
    public string RepositoryName { get; set; }
    public string Documentation { get; set; }
    public string ReleaseNotesFilePath { get; set; }
    public string Author { get; set; }
    public string Description { get; set; }
    public List<string> Categories { get; set; }
}

// Variables
List<AddinSpec> addinSpecs = new List<AddinSpec>();


//////////////////////////////////////////////////////////////////////
// TASKS
//////////////////////////////////////////////////////////////////////

Task("CleanAddinPackages")
    .Does(() =>
{
    CleanDirectory(addinDir);
});

Task("GetAddinSpecs")
    .Does(() =>
{
    var addinSpecFiles = GetFiles("./addins/*.yml");
    addinSpecs
        .AddRange(addinSpecFiles
            .Select(x =>
            {
                Verbose("Deserializing addin YAML from " + x);
                return DeserializeYamlFromFile<AddinSpec>(x);
            })
        );
});

Task("GetAddinPackages")
    .IsDependentOn("CleanAddinPackages")
    .IsDependentOn("GetAddinSpecs")
    .Does(() =>
    {
        var packagesPath = MakeAbsolute(Directory("./output")).Combine("packages");
        foreach(var addinSpec in addinSpecs.Where(x => !string.IsNullOrEmpty(x.NuGet)))
        {
            Information("Installing addin package " + addinSpec.NuGet);
            NuGetInstall(addinSpec.NuGet,
                new NuGetInstallSettings
                {
                    OutputDirectory = addinDir,
                    Prerelease = addinSpec.Prerelease,
                    Verbosity = NuGetVerbosity.Quiet,
                    Source = new [] { "https://api.nuget.org/v3/index.json" },
                    NoCache = true,
                    EnvironmentVariables = 
                        new Dictionary<string, string>
                        {
                            {"EnableNuGetPackageRestore", "true"},
                            {"NUGET_XMLDOC_MODE", "None"},
                            {"NUGET_PACKAGES", packagesPath.FullPath},
                            {"NUGET_EXE",  Context.Tools.Resolve("nuget.exe").FullPath }
                        }
                });
        }
    });

Task("GetReleaseNotes")
    .IsDependentOn("GetAddinSpecs")
    .WithCriteria(!string.IsNullOrEmpty(accessToken))
    .Does(() =>
    {
        var packagesPath = MakeAbsolute(Directory("./output")).Combine("packages");
        foreach(var addinSpec in addinSpecs.Where(x => !string.IsNullOrEmpty(x.RepositoryOwner) && !string.IsNullOrEmpty(x.RepositoryName) && !string.IsNullOrEmpty(x.ReleaseNotesFilePath)))
        {
            Information("Retrieving release notes for " + addinSpec.Name);
            GitReleaseManagerExport("pat", accessToken, addinSpec.RepositoryOwner, addinSpec.RepositoryName, addinSpec.ReleaseNotesFilePath);
        }
    });

Task("Build")
    .IsDependentOn("GetArtifacts")
    .Does(() =>
    {
        Wyam(new WyamSettings
        {
            Recipe = "Docs",
            Theme = "Samson",
            UpdatePackages = true,
            Settings = new Dictionary<string, object>
            {
                { "AssemblyFiles",  addinSpecs.Where(x => x.Assemblies != null).SelectMany(x => x.Assemblies).Select(x => "../release/addins" + x) },
                { "Host",  "cake-contrib.github.io" },
                { "LinkRoot",  "Cake.Prca.Website" },
                { "BaseEditUrl", "https://github.com/cake-contrib/Cake.Prca.Website/tree/develop/docs/input/" },
            }
        });
    });

// Does not download artifacts (run Build or GetArtifacts target first)
Task("Preview")
    .IsDependentOn("GetAddinSpecs")
    .Does(() =>
    {
        Wyam(new WyamSettings
        {
            Recipe = "Docs",
            Theme = "Samson",
            UpdatePackages = true,
            Preview = true,
            Watch = true,
            PreviewVirtualDirectory = "Cake.Prca.Website",
            Settings = new Dictionary<string, object>
            {
                { "AssemblyFiles",  addinSpecs.Where(x => x.Assemblies != null).SelectMany(x => x.Assemblies).Select(x => "../release/addins" + x) },
                { "Host",  "cake-contrib.github.io" },
                { "LinkRoot",  "Cake.Prca.Website" },
                { "BaseEditUrl", "https://github.com/cake-contrib/Cake.Prca.Website/tree/develop/docs/input/" },
            }
        });
    });

// Assumes Wyam source is local and at ../Wyam
Task("Debug")
    .Does(() =>
    {
        StartProcess("../Wyam/src/clients/Wyam/bin/Debug/wyam.exe",
            "-a \"../Wyam/src/**/bin/Debug/*.dll\" -r \"docs -i\" -t \"../Wyam/themes/Docs/Samson\" -p --attach");
    });

Task("Deploy")
    .WithCriteria(isRunningOnAppVeyor)
    .WithCriteria(!isPullRequest)
    .WithCriteria(isMasterBranch)
    .WithCriteria(!string.IsNullOrEmpty(accessToken))
    .WithCriteria(!string.IsNullOrEmpty(deployRemote))
    .WithCriteria(!string.IsNullOrEmpty(deployBranch))
    .IsDependentOn("Build")
    .Does(() =>
    {
        EnsureDirectoryExists(rootPublishFolder);
        var sourceCommit = GitLogTip("./");
        var publishFolder = rootPublishFolder.Combine(DateTime.Now.ToString("yyyyMMdd_HHmmss"));
        Information("Getting publish branch {0}...", deployBranch);
        GitClone(deployRemote, publishFolder, new GitCloneSettings{ BranchName = deployBranch });

        Information("Sync output files...");
        Kudu.Sync(outputPath, publishFolder, new KuduSyncSettings {
            PathsToIgnore = new []{ ".git", "appveyor.yml" }
        });

        Information("Stage all changes...");
        GitAddAll(publishFolder);

        Information("Commit all changes...");
        GitCommit(
            publishFolder,
            sourceCommit.Committer.Name,
            sourceCommit.Committer.Email,
            string.Format("AppVeyor Publish: {0}\r\n{1}", sourceCommit.Sha, sourceCommit.Message)
            );

        Information("Pushing all changes...");
        GitPush(publishFolder, accessToken, "x-oauth-basic", deployBranch);
    });

//////////////////////////////////////////////////////////////////////
// TASK TARGETS
//////////////////////////////////////////////////////////////////////

Task("Default")
    .IsDependentOn("Build");

Task("GetArtifacts")
    .IsDependentOn("GetAddinPackages")
    .IsDependentOn("GetReleaseNotes");

Task("AppVeyor")
    .IsDependentOn(!isPullRequest && isMasterBranch ? "Deploy" : "Build");


//////////////////////////////////////////////////////////////////////
// EXECUTION
//////////////////////////////////////////////////////////////////////

if (!StringComparer.OrdinalIgnoreCase.Equals(target, "Deploy"))
{
    RunTarget(target);
}
