---
Order: 10
Title: MsBuild Warnings
---
Support for reading warnings reported by MSBuild is implemented in the [Cake.Prca.Issues.MsBuild addin].

## Requirements

* Cake 0.16.2 or newer.

## Features

* Reads warnings from MSBuild log files.
* Supported log file formats:
  * [MSBuild Extension Pack XmlFileLogger]
* Provides URLs for all code analysis (`CA*`) and StyleCop (`SA*`) warnings.
* Support for custom URL resolving using the `MsBuildAddRuleUrlResolver` alias.

[Cake.Prca.Issues.MsBuild addin]: https://www.nuget.org/packages/Cake.Prca.Issues.MsBuild
[MSBuild Extension Pack XmlFileLogger]: http://www.msbuildextensionpack.com/help/4.0.5.0/html/242ab4fd-c2e2-f6aa-325b-7588725aed24.htm