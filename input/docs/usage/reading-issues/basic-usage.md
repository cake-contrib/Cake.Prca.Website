---
Order: 10
Title: Basic usage
Description: Usage instructions how to read issues.
---
The `Cake.Issues` addin can be used to aggregate issues from different sources.
This can for example be useful to break builds based on the reported issues.

The following example reads issues reported as MsBuild warnings and issues reported
by JetBrains inspect code with comments formatted as Markdown:

```csharp
#addin "Cake.Git"
#addin "Cake.Issues"
#addin "Cake.Issues.MsBuild"
#addin "Cake.Issues.InspectCode"

Task("Read-Issues").Does(() =>
{
    var settings =
        new ReadIssuesSettings(new DirectoryPath("c:\repo"))
        {
            Format = IssueCommentFormat.Markdown
        };

    var issues = ReadIssues(
        new List<IIssueProvider>
        {
            MsBuildCodeAnalysisFromFilePath(
                @"C:\build\msbuild.log",
                MsBuildXmlFileLoggerFormat),
            InspectCodeFromFilePath(
                @"C:\build\inspectcode.log")
        },
        settings));

    Information("{0} issues are found.", issues.Count());
});
```