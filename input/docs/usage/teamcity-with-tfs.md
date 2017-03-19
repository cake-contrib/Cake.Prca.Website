---
Order: 20
Title: Using with TeamCity and TFS
---
This page describes how to use the Cake Pull Request Code Analysis Addin for builds run on
TeamCity and with Team Foundation Server as pull request system.

TFS support is implemented in the `Cake.Prca.PullRequests.Tfs` addin.

In your main Cake build script run on TeamCity you need to determine the remote repository URL and
source branch of the pull request and create the [TfsPullRequests] object with this information.

You can retrieve the required information using the `Cake.Git` Addin:

```csharp
#addin "Cake.Git"
#addin "Cake.Prca"
#addin "Cake.Prca.Issues.MsBuild"
#addin "Cake.Prca.PullRequests.Tfs"

Task("prca").Does(() =>
{
    var repoRootFolder = MakeAbsolute(Directory("./"));
    var currentBranch = GitBranchCurrent(repoRootFolder);
    var repoRemoteUrl = new Uri(currentBranch.Remotes.Single(x => x.Name == "origin").Url);
    var sourceBranchName = currentBranch.CanonicalName;

    ReportCodeAnalysisIssuesToPullRequest(
        MsBuildCodeAnalysis(@"C:\build\msbuild.log", MsBuildXmlFileLoggerFormat),
        TfsPullRequests(repoRemoteUrl, sourceBranchName));
});
```

[TfsPullRequests]: ../../api/Cake.Prca.PullRequests.Tfs/TfsPullRequestSystemAliases/