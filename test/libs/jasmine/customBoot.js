define( [
    'jasmineHTML'
], function() {

    function extend(destination, source) {
        for (var property in source) destination[property] = source[property];
        return destination;
    }

    window.jasmine = jasmineRequire.core(jasmineRequire);
    jasmineRequire.html(jasmine);
    var env = jasmine.getEnv();
    var jasmineInterface = jasmineRequire.interface(jasmine, env);
    extend(window, jasmineInterface);

    var queryString = new jasmine.QueryString({
        getWindowLocation: function() { return window.location; }
    });

    var catchingExceptions = queryString.getParam("catch");
    env.catchExceptions(typeof catchingExceptions === "undefined" ? true : catchingExceptions);

    var throwingExpectationFailures = queryString.getParam("throwFailures");
    env.throwOnExpectationFailure(throwingExpectationFailures);

    var htmlReporter = new jasmine.HtmlReporter({
        env: env,
        onRaiseExceptionsClick: function() { queryString.navigateWithNewParam("catch", !env.catchingExceptions()); },
        onThrowExpectationsClick: function() { queryString.navigateWithNewParam("throwFailures", !env.throwingExpectationFailures()); },
        addToExistingQueryString: function(key, value) { return queryString.fullStringWithNewParam(key, value); },
        getContainer: function() { return document.body; },
        createElement: function() { return document.createElement.apply(document, arguments); },
        createTextNode: function() { return document.createTextNode.apply(document, arguments); },
        timer: new jasmine.Timer()
    });

    env.addReporter(jasmineInterface.jsApiReporter);
    env.addReporter(htmlReporter);

    var specFilter = new jasmine.HtmlSpecFilter({
        filterString: function() { return queryString.getParam("spec"); }
    });

    env.specFilter = function(spec) {
        return specFilter.matches(spec.getFullName());
    };

    window.setTimeout = window.setTimeout;
    window.setInterval = window.setInterval;
    window.clearTimeout = window.clearTimeout;
    window.clearInterval = window.clearInterval;

    return {
        htmlReporter: htmlReporter,
        env: env
    }
} );
