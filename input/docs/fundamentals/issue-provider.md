---
Order: 20
---

Issue provider Addins are responsible for providing the output of an analyzer or linter to the Cake Pull Request Code Analysis Addin.

## Implementation

Issue providers need to implement the [ICodeAnalysisProvider] interface.
For simplyfing implementation there exists an abstract [CodeAnalysisProvider] base class from which concrete implementation can be inherited.

Issue provider aliases should use the `CakeAliasConstants.MainCakeAliasCategory` and  `CakeAliasConstants.CodeAnalysisProviderCakeAliasCategory`
constants for defining their category:

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

## Helper

The following helper are provider by `Cake.Prca` for simplyfing implementation of issue providers:

| Helper                 | Description                               |
|------------------------|-------------------------------------------|
| [StringPathExtensions] | Extensions for string for handling paths. |

[ICodeAnalysisProvider]: ../../api/Cake.Prca.Issues/ICodeAnalysisProvider
[CodeAnalysisProvider]: ../../api/Cake.Prca.Issues/CodeAnalysisProvider
[StringPathExtensions]: ../../api/Cake.Prca.Issues/StringPathExtensions