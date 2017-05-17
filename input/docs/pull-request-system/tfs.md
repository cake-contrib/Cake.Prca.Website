---
Order: 10
Title: TFS & VSTS
---
Support for Team Foundation Server (TFS) and Visual Studio Team Services (VSTS) is implemented in the `Cake.Prca.PullRequests.Tfs` addin.

## Requirements

* Cake 0.16.2 or newer.
* Team Foundation Server 2017 or newer or Visual Studio Team Services.

## Features

* Writes issues as comments to Team Foundation Server (TFS) or Visual Studio Team Services (VSTS) pull requests.
* Full support for all [Core features].
* Supported authentication methods:
  * NTLM using the [TfsAuthenticationNtlm] alias.
    Can only be used for on-premise Team Foundation Server.
  * Basic authentication using the [TfsAuthenticationBasic] alias.
    Can only be used for on-premise Team Foundation Server [configured for basic authentication].
  * Personal Access Token using the [TfsAuthenticationPersonalAccessToken] alias.
    Can be used for Team Foundation Server or Visual Studio Team Services.
  * OAuth using the [TfsAuthenticationOAuth] alias.
    Can only be used with Visual Studio Team Services.
  * Azure Active Directory using the [TfsAuthenticationAzureActiveDirectory] alias.
* Identification of pull requests through source branch or pull request ID.
* Comments written by the addin will be rendered with a specific icon corresponding to the state of the issue.
* Adds rule number and, if provided by the issue provider, link to the rule description to the comment.
* Support for issues messages formatted in Markdown format.

[Core features]: ../overview/features#supported-core-functionality
[TfsAuthenticationNtlm]: ../../api/Cake.Prca.PullRequests.Tfs/TfsPullRequestSystemAliases/7DFCE6F3
[TfsAuthenticationBasic]: ../../api/Cake.Prca.PullRequests.Tfs/TfsPullRequestSystemAliases/3A473143
[TfsAuthenticationPersonalAccessToken]: ../../api/Cake.Prca.PullRequests.Tfs/TfsPullRequestSystemAliases/B24D89BD
[TfsAuthenticationOAuth]: ../../api/Cake.Prca.PullRequests.Tfs/TfsPullRequestSystemAliases/BEDAF9BF
[TfsAuthenticationAzureActiveDirectory]: ../../api/Cake.Prca.PullRequests.Tfs/TfsPullRequestSystemAliases/DF54F8F0
[configured for basic authentication]: https://www.visualstudio.com/en-us/docs/integrate/get-started/auth/tfs-basic-auth
