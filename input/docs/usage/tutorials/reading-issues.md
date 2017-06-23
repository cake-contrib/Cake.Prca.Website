---
Order: 20
Title: Reading issues
Description: Usage instructions how to read issues.
---
The `Cake.PRCA` can be used to aggregate issues from different sources.
This can for example be useful to break builds based on the reported issues.

:::{.alert .alert-info}
Please note that for using this functionality you don't need a pull request system.
:::

The following example reads code analysis issues reported as MsBuild warnings and issues reported
by JetBrains inspect code with comments formatted as Markdown:

```csharp
#addin "Cake.Git"
#addin "Cake.Prca"
#addin "Cake.Prca.Issues.MsBuild"
#addin "Cake.Prca.Issues.InspectCode"

Task("Read-Issues").Does(() =>
{
    var settings =
        new ReadIssuesSettings(new DirectoryPath("c:\repo"))
        {
            Format = PrcaCommentFormat.Markdown
        };

    var issues = ReadIssues(
        new List<ICodeAnalysisProvider>
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