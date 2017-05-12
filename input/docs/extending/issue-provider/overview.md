---
Order: 20
Title: Overview
Description: Overview how to implement support for an analyzer or linter.
---
Issue providers need to implement the [ICodeAnalysisProvider] interface.
For simplyfing implementation there exists an abstract [CodeAnalysisProvider] base class from which concrete implementation can be inherited.

[ICodeAnalysisProvider]: ../../../api/Cake.Prca.Issues/ICodeAnalysisProvider
[CodeAnalysisProvider]: ../../../api/Cake.Prca.Issues/CodeAnalysisProvider