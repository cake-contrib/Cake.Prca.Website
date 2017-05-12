---
Order: 30
Title: Alias categories
Description: Instructions how to set the alias category.
---
Pull request system aliases should use the [CakeAliasConstants.MainCakeAliasCategory] and
[CakeAliasConstants.PullRequestSystemCakeAliasCategory] constants for defining their category:

```csharp
[CakeAliasCategory(CakeAliasConstants.MainCakeAliasCategory)]
public static class MyPullRequestSystemAliases
{
    [CakeMethodAlias]
    [CakeAliasCategory(CakeAliasConstants.PullRequestSystemCakeAliasCategory)]
    public static ICodeAnalysisProvider MyPullRequestSystem(
        this ICakeContext context)
    {
    }
}
```

[CakeAliasConstants.MainCakeAliasCategory]: ../../../api/Cake.Prca/CakeAliasConstants/4481299D
[CakeAliasConstants.PullRequestSystemCakeAliasCategory]: ../../../api/Cake.Prca/CakeAliasConstants/1AFE170C