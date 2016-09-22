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

        var getUrlParameter = function getUrlParameter(sParam) {
            var sPageURL = decodeURIComponent(window.location.search.substring(1)),
                sURLVariables = sPageURL.split('&'),
                sParameterName,
                i;

            for (i = 0; i < sURLVariables.length; i++) {
                sParameterName = sURLVariables[i].split('=');

                if (sParameterName[0] === sParam) {
                    return sParameterName[1] === undefined ? true : sParameterName[1];
                }
            }
        };

        var linkedInAuth = getUrlParameter('code');
        console.log(linkedInAuth);
            var authObj = {
                grant_type:'authorization_code',
                code:linkedInAuth,
                redirect_uri:'https://erickim90.github.io/overworld/githublinkedin.html',
                client_id:'75x30wo62mthj4',
                client_secret:'clma06lUbAJrEqGe'
            };
        if(linkedInAuth !== undefined){

            $.post('http://cors.io/?https://www.linkedin.com/oauth/v2/accessToken', authObj, function(response) {
                console.log(response)
            }, 'json');
            

        }
        else{
            console.log('No Permission')
        }
    });
})();
