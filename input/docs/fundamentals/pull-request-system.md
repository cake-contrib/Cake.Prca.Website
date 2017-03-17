---
Order: 30
---

Pull Request Addins implement specific Pull Request Systems and allow the Cake Pull Request Code Analysis Addin to write found issues as comments to pull requests.

## Implementation

Pull Request Systems need to implement the [IPullRequestSystem] interface.
For simplyfing implementation there exists an abstract [PullRequestSystem] base class from which concrete implementation can be inherited.

Pull request system aliases should use the `CakeAliasConstants.MainCakeAliasCategory` and  `CakeAliasConstants.PullRequestSystemCakeAliasCategory`
constants for defining their category:

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

[IPullRequestSystem]: ../../api/Cake.Prca.PullRequests/IPullRequestSystem
[PullRequestSystem]: ../../api/Cake.Prca.PullRequests/PullRequestSystem