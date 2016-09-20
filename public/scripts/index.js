/**
 * Created by kobe on 9/18/2016.
 */
(function () {
    var jqueryReady = function (callback) {
        if (window.jQuery)
            callback(jQuery);
        else {
            loadScripts(['https://code.jquery.com/jquery-2.2.4.min.js']);
            window.setTimeout(function () {
                jqueryReady(callback);
            }, 1000);
        }
    };

    function loadScripts(scripts) {
        scripts.forEach(function (scriptUrl) {
            var script = document.createElement("SCRIPT");
            script.src = scriptUrl;
            script.type = 'text/javascript';
            document.getElementsByTagName("head")[0].appendChild(script);
        });
    }

    jqueryReady(function ($) {
        console.log('jquery loaded')
    });
})();