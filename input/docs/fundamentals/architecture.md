---
Order: 10
---

The addin is built in a modular architecture, allowing to easily enhance it for supporting additional analyzers, linters and code review systems.

The `Cake.Prca` Addin itself only implements the core logic.
Support for different code analyizers and linters can be provided through additional [issue provider] addins.
Support for different pull request systems can be provided through additional [pull request system] addins.

[issue provider]: issue-provider
[pull request system]: pull-request-system
