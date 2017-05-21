---
Order: 10
Title: Basic usage
Description: Basic usage instructions.
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

:::{.alert .alert-info}
Please note that the core addin and all issue providers and pull request systems need to be build
against a compatible core API.
You can check the required dependencies through the dependencies on the NuGet package of the addins.

This means that it's not possible to use a version of an issue provider build against `Cake.Prca` 1.0.0
together with a version of a pull request system build against `Cake.Prca` 2.0.0.

We use strict [semantic versioning].
Therefore it's possible to use issue provider and pull request system built against `Cake.Prca` 1.0.0
together with `Cake.Prca` 1.1.0.
:::

Finally you can define a task where you call the core addin with the desired issue provider and pull request system:

```csharp
Task("prca").Does(() =>
{
    var repoRootFolder = new DirectoryPath("c:\repo");
    ReportCodeAnalysisIssuesToPullRequest(
        MsBuildCodeAnalysisFromFilePath(
            @"C:\build\msbuild.log",
            MsBuildXmlFileLoggerFormat),
        TfsPullRequests(
            new Uri("http://myserver:8080/tfs/defaultcollection/myproject/_git/myrepository"),
            "refs/heads/feature/myfeature",
            TfsAuthenticationNtlm()),
        repoRootFolder);
});
```

[semantic versioning]: http://semver.org/