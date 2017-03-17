---
Order: 10
Title: Basic usage
---
To use Pull Request Code Analysis in your Cake file you need to import the core addin:

```csharp
#addin "Cake.Prca"
```

Also you need to import at least one issue provider and pull request system.
In the following example the issue provider for reading warnings from MsBuild log files
and support for TFS pull requests is imported:

```csharp
#addin "Cake.Prca.Issues.MsBuild"
#addin "Cake.Prca.PullRequests.Tfs"
```

Finally you can define a task where you call the core addin with the desired issue provider and pull request system:

```csharp
Task("prca").Does(() =>
{
    ReportCodeAnalysisIssuesToPullRequest(
        MsBuildCodeAnalysisFromFilePath(
            @"C:\build\msbuild.log",
            MsBuildXmlFileLoggerFormat,
            new DirectoryPath("c:\repo")),
        TfsPullRequests(
            new Uri("http://myserver:8080/tfs/defaultcollection/myproject/_git/myrepository"),
            "refs/heads/feature/myfeature"));
});
```