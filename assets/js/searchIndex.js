
var camelCaseTokenizer = function (obj) {
    var previous = '';
    return obj.toString().trim().split(/[\s\-]+|(?=[A-Z])/).reduce(function(acc, cur) {
        var current = cur.toLowerCase();
        if(acc.length === 0) {
            previous = current;
            return acc.concat(current);
        }
        previous = previous.concat(current);
        return acc.concat([current, previous]);
    }, []);
}
lunr.tokenizer.registerFunction(camelCaseTokenizer, 'camelCaseTokenizer')
var searchModule = function() {
    var idMap = [];
    function y(e) { 
        idMap.push(e); 
    }
    var idx = lunr(function() {
        this.field('title', { boost: 10 });
        this.field('content');
        this.field('description', { boost: 5 });
        this.field('tags', { boost: 50 });
        this.ref('id');
        this.tokenizer(camelCaseTokenizer);

        this.pipeline.remove(lunr.stopWordFilter);
        this.pipeline.remove(lunr.stemmer);
    });
    function a(e) { 
        idx.add(e); 
    }

    a({
        id:0,
        title:"TfsNtlmCredentials",
        content:"TfsNtlmCredentials",
        description:'',
        tags:''
    });

    a({
        id:1,
        title:"BaseRuleDescription",
        content:"BaseRuleDescription",
        description:'',
        tags:''
    });

    a({
        id:2,
        title:"PrcaException",
        content:"PrcaException",
        description:'',
        tags:''
    });

    a({
        id:3,
        title:"CodeAnalysisIssue",
        content:"CodeAnalysisIssue",
        description:'',
        tags:''
    });

    a({
        id:4,
        title:"InspectCodeProviderAliases",
        content:"InspectCodeProviderAliases",
        description:'',
        tags:''
    });

    a({
        id:5,
        title:"CakeAliasConstants",
        content:"CakeAliasConstants",
        description:'',
        tags:''
    });

    a({
        id:6,
        title:"ReportCodeAnalysisIssuesToPullRequestSettings",
        content:"ReportCodeAnalysisIssuesToPullRequestSettings",
        description:'',
        tags:''
    });

    a({
        id:7,
        title:"PrcaDiscussionStatus",
        content:"PrcaDiscussionStatus",
        description:'',
        tags:''
    });

    a({
        id:8,
        title:"CodeAnalysisProvider",
        content:"CodeAnalysisProvider",
        description:'',
        tags:''
    });

    a({
        id:9,
        title:"IPrcaDiscussionComment",
        content:"IPrcaDiscussionComment",
        description:'',
        tags:''
    });

    a({
        id:10,
        title:"InspectCodeSettings",
        content:"InspectCodeSettings",
        description:'',
        tags:''
    });

    a({
        id:11,
        title:"PrcaDiscussionThread",
        content:"PrcaDiscussionThread",
        description:'',
        tags:''
    });

    a({
        id:12,
        title:"ICodeAnalysisIssue",
        content:"ICodeAnalysisIssue",
        description:'',
        tags:''
    });

    a({
        id:13,
        title:"MsBuildRuleDescription",
        content:"MsBuildRuleDescription",
        description:'',
        tags:''
    });

    a({
        id:14,
        title:"PrcaArgumentChecks",
        content:"PrcaArgumentChecks",
        description:'',
        tags:''
    });

    a({
        id:15,
        title:"InspectCodeProvider",
        content:"InspectCodeProvider",
        description:'',
        tags:''
    });

    a({
        id:16,
        title:"XmlFileLoggerFormat",
        content:"XmlFileLoggerFormat",
        description:'',
        tags:''
    });

    a({
        id:17,
        title:"TfsPullRequestSystemAliases",
        content:"TfsPullRequestSystemAliases",
        description:'',
        tags:''
    });

    a({
        id:18,
        title:"MarkdownlintProvider",
        content:"MarkdownlintProvider",
        description:'',
        tags:''
    });

    a({
        id:19,
        title:"StringPathExtensions",
        content:"StringPathExtensions",
        description:'',
        tags:''
    });

    a({
        id:20,
        title:"TfsPullRequestSettings",
        content:"TfsPullRequestSettings",
        description:'',
        tags:''
    });

    a({
        id:21,
        title:"PullRequestSystem",
        content:"PullRequestSystem",
        description:'',
        tags:''
    });

    a({
        id:22,
        title:"IPrcaDiscussionThread",
        content:"IPrcaDiscussionThread",
        description:'',
        tags:''
    });

    a({
        id:23,
        title:"MsBuildCodeAnalysisProvider",
        content:"MsBuildCodeAnalysisProvider",
        description:'',
        tags:''
    });

    a({
        id:24,
        title:"IPullRequestSystem",
        content:"IPullRequestSystem",
        description:'',
        tags:''
    });

    a({
        id:25,
        title:"MarkdownlintSettings",
        content:"MarkdownlintSettings",
        description:'',
        tags:''
    });

    a({
        id:26,
        title:"PrcaCommentFormat",
        content:"PrcaCommentFormat",
        description:'',
        tags:''
    });

    a({
        id:27,
        title:"BaseRuleUrlResolver",
        content:"BaseRuleUrlResolver",
        description:'',
        tags:''
    });

    a({
        id:28,
        title:"MsBuildCodeAnalysisSettings",
        content:"MsBuildCodeAnalysisSettings",
        description:'',
        tags:''
    });

    a({
        id:29,
        title:"PrcaResult",
        content:"PrcaResult",
        description:'',
        tags:''
    });

    a({
        id:30,
        title:"TfsOAuthCredentials",
        content:"TfsOAuthCredentials",
        description:'',
        tags:''
    });

    a({
        id:31,
        title:"EsLintSettings",
        content:"EsLintSettings",
        description:'',
        tags:''
    });

    a({
        id:32,
        title:"MarkdownlintProviderAliases",
        content:"MarkdownlintProviderAliases",
        description:'',
        tags:''
    });

    a({
        id:33,
        title:"MsBuildCodeAnalysisProviderAliases",
        content:"MsBuildCodeAnalysisProviderAliases",
        description:'',
        tags:''
    });

    a({
        id:34,
        title:"LogFileFormat",
        content:"LogFileFormat",
        description:'',
        tags:''
    });

    a({
        id:35,
        title:"DocFxIssuesProviderAliases",
        content:"DocFxIssuesProviderAliases",
        description:'',
        tags:''
    });

    a({
        id:36,
        title:"CodeAnalysisIssue",
        content:"CodeAnalysisIssue",
        description:'',
        tags:''
    });

    a({
        id:37,
        title:"TfsPullRequestSystem",
        content:"TfsPullRequestSystem",
        description:'',
        tags:''
    });

    a({
        id:38,
        title:"TfsAadCredentials",
        content:"TfsAadCredentials",
        description:'',
        tags:''
    });

    a({
        id:39,
        title:"PrcaAliases",
        content:"PrcaAliases",
        description:'',
        tags:''
    });

    a({
        id:40,
        title:"DocFxIssuesSettings",
        content:"DocFxIssuesSettings",
        description:'',
        tags:''
    });

    a({
        id:41,
        title:"ILogFileFormat",
        content:"ILogFileFormat",
        description:'',
        tags:''
    });

    a({
        id:42,
        title:"ICodeAnalysisProvider",
        content:"ICodeAnalysisProvider",
        description:'',
        tags:''
    });

    a({
        id:43,
        title:"PrcaDiscussionComment",
        content:"PrcaDiscussionComment",
        description:'',
        tags:''
    });

    a({
        id:44,
        title:"EsLintProviderAliases",
        content:"EsLintProviderAliases",
        description:'',
        tags:''
    });

    a({
        id:45,
        title:"TfsBasicCredentials",
        content:"TfsBasicCredentials",
        description:'',
        tags:''
    });

    a({
        id:46,
        title:"LogFileFormat",
        content:"LogFileFormat",
        description:'',
        tags:''
    });

    a({
        id:47,
        title:"IPrcaCredentials",
        content:"IPrcaCredentials",
        description:'',
        tags:''
    });

    a({
        id:48,
        title:"ILogFileFormat",
        content:"ILogFileFormat",
        description:'',
        tags:''
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.PullRequests.Tfs.Authentication/TfsNtlmCredentials',
        title:"TfsNtlmCredentials",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.Issues/BaseRuleDescription',
        title:"BaseRuleDescription",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca/PrcaException',
        title:"PrcaException",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.Issues/CodeAnalysisIssue_1',
        title:"CodeAnalysisIssue<T>",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.Issues.InspectCode/InspectCodeProviderAliases',
        title:"InspectCodeProviderAliases",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca/CakeAliasConstants',
        title:"CakeAliasConstants",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca/ReportCodeAnalysisIssuesToPullRequestSettings',
        title:"ReportCodeAnalysisIssuesToPullRequestSettings",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.PullRequests/PrcaDiscussionStatus',
        title:"PrcaDiscussionStatus",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.Issues/CodeAnalysisProvider',
        title:"CodeAnalysisProvider",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.PullRequests/IPrcaDiscussionComment',
        title:"IPrcaDiscussionComment",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.Issues.InspectCode/InspectCodeSettings',
        title:"InspectCodeSettings",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.PullRequests/PrcaDiscussionThread',
        title:"PrcaDiscussionThread",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.Issues/ICodeAnalysisIssue',
        title:"ICodeAnalysisIssue",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.Issues.MsBuild/MsBuildRuleDescription',
        title:"MsBuildRuleDescription",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca/PrcaArgumentChecks',
        title:"PrcaArgumentChecks",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.Issues.InspectCode/InspectCodeProvider',
        title:"InspectCodeProvider",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.Issues.MsBuild/XmlFileLoggerFormat',
        title:"XmlFileLoggerFormat",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.PullRequests.Tfs/TfsPullRequestSystemAliases',
        title:"TfsPullRequestSystemAliases",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.Issues.Markdownlint/MarkdownlintProvider',
        title:"MarkdownlintProvider",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.Issues/StringPathExtensions',
        title:"StringPathExtensions",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.PullRequests.Tfs/TfsPullRequestSettings',
        title:"TfsPullRequestSettings",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.PullRequests/PullRequestSystem',
        title:"PullRequestSystem",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.PullRequests/IPrcaDiscussionThread',
        title:"IPrcaDiscussionThread",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.Issues.MsBuild/MsBuildCodeAnalysisProvider',
        title:"MsBuildCodeAnalysisProvider",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.PullRequests/IPullRequestSystem',
        title:"IPullRequestSystem",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.Issues.Markdownlint/MarkdownlintSettings',
        title:"MarkdownlintSettings",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca/PrcaCommentFormat',
        title:"PrcaCommentFormat",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.Issues/BaseRuleUrlResolver_1',
        title:"BaseRuleUrlResolver<T>",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.Issues.MsBuild/MsBuildCodeAnalysisSettings',
        title:"MsBuildCodeAnalysisSettings",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca/PrcaResult',
        title:"PrcaResult",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.PullRequests.Tfs.Authentication/TfsOAuthCredentials',
        title:"TfsOAuthCredentials",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.Issues.EsLint/EsLintSettings',
        title:"EsLintSettings",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.Issues.Markdownlint/MarkdownlintProviderAliases',
        title:"MarkdownlintProviderAliases",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.Issues.MsBuild/MsBuildCodeAnalysisProviderAliases',
        title:"MsBuildCodeAnalysisProviderAliases",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.Issues.MsBuild/LogFileFormat',
        title:"LogFileFormat",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.Issues.DocFx/DocFxIssuesProviderAliases',
        title:"DocFxIssuesProviderAliases",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.Issues/CodeAnalysisIssue',
        title:"CodeAnalysisIssue",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.PullRequests.Tfs/TfsPullRequestSystem',
        title:"TfsPullRequestSystem",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.PullRequests.Tfs.Authentication/TfsAadCredentials',
        title:"TfsAadCredentials",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca/PrcaAliases',
        title:"PrcaAliases",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.Issues.DocFx/DocFxIssuesSettings',
        title:"DocFxIssuesSettings",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.Issues.EsLint/ILogFileFormat',
        title:"ILogFileFormat",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.Issues/ICodeAnalysisProvider',
        title:"ICodeAnalysisProvider",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.PullRequests/PrcaDiscussionComment',
        title:"PrcaDiscussionComment",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.Issues.EsLint/EsLintProviderAliases',
        title:"EsLintProviderAliases",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.PullRequests.Tfs.Authentication/TfsBasicCredentials',
        title:"TfsBasicCredentials",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.Issues.EsLint/LogFileFormat',
        title:"LogFileFormat",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.PullRequests.Tfs/IPrcaCredentials',
        title:"IPrcaCredentials",
        description:""
    });

    y({
        url:'/Cake.Prca.Website/Cake.Prca.Website/api/Cake.Prca.Issues.MsBuild/ILogFileFormat',
        title:"ILogFileFormat",
        description:""
    });

    return {
        search: function(q) {
            return idx.search(q).map(function(i) {
                return idMap[i.ref];
            });
        }
    };
}();
