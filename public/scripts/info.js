/**
 * Created by kobe on 9/19/2016.
 */
/**
 * Created by Kobe on 9/1/2016.
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
        GitHubCalendar(".calendar", "erickim90");
        $.get( "https://api.github.com/users/erickim90", function(data) {
            console.log(data)
            $("#eck-github-profile").append(
                '<div class="mdl-card__media"><img src="'+data.avatar_url+'" class="width-percent-100"></div>'
                +'<div class="mdl-grid">'
                +'<h3  class="mdl-cell mdl-cell--12-col mdl-typography--headline margin-bottom-0 eck-github-name">'+data.name+'</h3>'
                +'<h6  class="mdl-cell mdl-cell--12-col margin-top-0 eck-github-username">'+data.login+'</h6>'
                +'<div class="mdl-cell mdl-cell--12-col mdl-card__supporting-text padding-0 eck-github-bio">'+data.bio+'</div>'
                +'</div>');
        })
            .done(function() {
                console.log( "Finished AJAX call" );
            })
            .fail(function() {
                alert( "There was an error" );
            })
            .always(function() {
                console.log( "Done" );
            });
    });
})();