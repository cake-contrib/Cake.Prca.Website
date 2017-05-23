---
Order: 50
Title: DocFx warnings
Description: Issue provider which allows you to write any warnings logged by DocFx as comments to a pull request.
---
Support for reading warnings reported by [DocFx] is implemented in the [Cake.Prca.Issues.DocFx addin].

## Requirements

* Cake 0.16.2 or newer.

## Features

* Reads warnings from [DocFx] log files.

## Example

The following example will call [DocFx] to generate the documentation and report any warnings from
the build as comments to the Team Foundation Server pull request.

To call [DocFx] from a Cake script you can use the [Cake.DocFx] addin.

```csharp
#addin "Cake.DocFx"
#addin "Cake.Prca"
#addin "Cake.Prca.Issues.MsBuild"
#addin "Cake.Prca.PullRequests.Tfs"

Task("prca").Does(() =>
{
    // Run DocFx.
    var logPath = @"c:\build\docfx.log";
    DocFxBuild(new DocFxBuildSettings()
    {
        LogPath = logPath
    });

    // Run PRCA.
    var repoRootFolder = new DirectoryPath("c:\repo");
    ReportCodeAnalysisIssuesToPullRequest(
        DocFxIssuesFromFilePath(logPath),
        TfsPullRequests(
            new Uri("http://myserver:8080/tfs/defaultcollection/myproject/_git/myrepository"),
            "refs/heads/feature/myfeature",
            TfsAuthenticationNtlm()),
        repoRootFolder);
});
```

[DocFx]: https://dotnet.github.io/docfx/
[Cake.Prca.Issues.DocFx addin]: https://www.nuget.org/packages/Cake.Prca.Issues.DocFx
[Cake.DocFx]: https://www.nuget.org/packages/Cake.DocFx/