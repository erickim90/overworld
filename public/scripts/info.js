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
        //Hide content and show spinner on page load
        var loadingSpinner = $('#loadingDiv');
        var $loadingGithub = $('#loadingGithub');

        //Show content and hide spinner on ajax complete
        $(document)
            .ajaxStart(function () {
                loadingSpinner.show();
            })
            .ajaxStop(function () {
                loadingSpinner.hide();
                $loadingGithub.show();
            });

        // custom library for github calendar
        // https://github.com/IonicaBizau/github-calendar
        // Embed your GitHub calendar everywhere.
        GitHubCalendar(".calendar", "erickim90");

        //Ajax request to github API
        $.get( "https://api.github.com/users/erickim90", function(data) {
            console.log(data);
            $("#eck-github-profile").prepend(
                //Append returned data
                '<div class="mdl-card__media"><img src="'+data.avatar_url+'" class="width-percent-100"></div>'
                +'<div class="mdl-grid padding-bottom-0">'
                +'<h3  class="mdl-cell mdl-cell--12-col mdl-typography--headline margin-bottom-0 eck-github-name">'+data.name+'</h3>'
                +'<h6  class="mdl-cell mdl-cell--12-col margin-top-0 eck-github-username">'+data.login+'</h6>'
                +'<div class="mdl-cell mdl-cell--12-col mdl-card__supporting-text padding-0 eck-github-bio">'+data.bio+'</div>'
                +'</div>'
                +'<div> <ul class="mdl-list">'
                +'<li><hr class="margin-top-0"></li>'
                +'<li class="mdl-list__item eck-github-list">'
                +'<span class="mdl-list__item-primary-content">'
                +'<i class="fa fa-phone eck-github-icons" aria-hidden="true"></i>Phone'
                +'</span> </li>'
                +'<li class="mdl-list__item eck-github-list">'
                +'<span class="mdl-list__item-primary-content">'
                +'<i class="fa fa-users eck-github-icons" aria-hidden="true"></i>'+data.company
                +'</span> </li>'
                +'<li class="mdl-list__item eck-github-list">'
                +'<span class="mdl-list__item-primary-content">'
                +'<i class="fa fa-location-arrow eck-github-icons" aria-hidden="true"></i>'+data.location
                +'</span> </li>'
                +'<li class="mdl-list__item eck-github-list">'
                +'<span class="mdl-list__item-primary-content">'
                +'<i class="fa fa-envelope-o eck-github-icons" aria-hidden="true"></i>'+data.email
                +'</span> </li>'
                +'<li class="mdl-list__item eck-github-list">'
                +'<span class="mdl-list__item-primary-content">'
                +'<i class="fa fa-clock-o eck-github-icons" aria-hidden="true"></i>' + 'Joined '+moment(data.created_at).format('MMM DD YYYY')
                +'</span> </li> </ul> </div>'
            )


        })
        // .done(function() {})
            .fail(function() {alert( "There was an error" );});
        // .always(function() {});



    });
})();


