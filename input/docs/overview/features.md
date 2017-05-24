---
Order: 10
Description: Overview about core features.
---
The Pull Request Code Analysis Addin for Cake allows you to add issues from any analyzer or linter to comments in pull requests.

## Supported Core Functionality

The core addin provides the following functionality:

* Modular architecture, allowing to easily enhance it for supporting additional analyzers, linters and code review systems.
* Support for reporting issues from multiple issue providers.
* Filtering issues to only those related to changes in a pull request.
* Automatic resolving of issues fixed in subsequent commits.
* Comparing issues by content to not rely on line numbers.
* Limit number of maximum issues to post.
* Returns all issues as provided by the issue providers and the issues reported to the pull request.
  This can be used to fail builds on certain conditions.

## Supported Issue Providers

See [Issue Provider Addins] for a list of currently supported analyzers and linters.

## Supported Pull Request Systems

See [Pull Request System Addins] for a list of currently supported pull request systems.

[Issue Provider Addins]: ../../addins/issue-provider/
[Pull Request System Addins]: ../../addins/pull-request-system/
