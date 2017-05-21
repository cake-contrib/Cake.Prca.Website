---
Order: 30
Title: Markdownlint
Description: Issue provider which allows you to write any issues logged by markdownlint as comments to a pull request.
---
Support for reading issues reported by [Markdownlint] is implemented in the [Cake.Prca.Issues.Markdownlint addin].

## Requirements

* Cake 0.16.2 or newer.

## Features

* Reads warnings from [Markdownlint] output generated with `options.resultVersion` set to 1.

[Markdownlint]: https://github.com/DavidAnson/markdownlint
[Cake.Prca.Issues.Markdownlint addin]: https://www.nuget.org/packages/Cake.Prca.Issues.Markdownlint