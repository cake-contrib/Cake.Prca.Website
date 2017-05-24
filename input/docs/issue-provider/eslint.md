---
Order: 40
Title: ESLint Issues
Description: Issue provider which allows you to write any issues logged by ESLint as comments to a pull request.
---
Support for reading issues reported by ESLint is implemented in the [Cake.Prca.Issues.EsLint addin].

## Requirements

* Cake 0.16.2 or newer.

## Features

* Reads issues reported by ESLint.
* Supported ESLint formatters:
  * [json formatter]
* Provides URLs for all issues.
* Support for custom URL resolving using the [EsLintAddRuleUrlResolver] alias.

[Cake.Prca.Issues.EsLint addin]: https://www.nuget.org/packages/Cake.Prca.Issues.EsLint
[json formatter]: http://eslint.org/docs/user-guide/formatters/#json
[EsLintAddRuleUrlResolver]: ../../api/Cake.Prca.Issues.EsLint/EsLintIssuesAliases/66FCBDE8