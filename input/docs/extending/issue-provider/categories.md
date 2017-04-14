---
Order: 30
Title: Alias categories
Description: Instructions how to set the alias category.
---
Issue provider aliases should use the [CakeAliasConstants.MainCakeAliasCategory] and
[CakeAliasConstants.CodeAnalysisProviderCakeAliasCategory] constants for defining their category:

```csharp
[CakeAliasCategory(CakeAliasConstants.MainCakeAliasCategory)]
public static class MyIssueProviderAliases
{
    [CakeMethodAlias]
    [CakeAliasCategory(CakeAliasConstants.CodeAnalysisProviderCakeAliasCategory)]
    public static ICodeAnalysisProvider MyIssueProvider(
        this ICakeContext context)
    {
    }
}
```

[CakeAliasConstants.MainCakeAliasCategory]: ../../../api/Cake.Prca/CakeAliasConstants/4481299D
[CakeAliasConstants.CodeAnalysisProviderCakeAliasCategory]: ../../../api/Cake.Prca/CakeAliasConstants/077189B4