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
        var bpl            = $('#bluepandalabs');
        var bpl_small      = $('#bluepandalabs > small');
        var portal         = $('#theportal');
        var portal_small   = $('#theportal > small');
        var k5             = $('#k5');
        var k5_small       = $('#k5 > small');

            bpl.click(function(){
                bpl_small.addClass("eck-is-active");
                portal_small.removeClass("eck-is-active");
                k5_small.removeClass("eck-is-active");
                $( '.eck-company-info > p'  ).replaceWith( "<p>Blue Panda Labs is a professional web application and technical " +
                    "consulting company.We work tirelessly to provide timely and effective solutions for our clients,whether " +
                    "it is developing an innovative application, or installing a custom hardware solution.</p>" );
            });
            portal.click(function(){
                bpl_small.removeClass("eck-is-active");
                portal_small.addClass("eck-is-active");
                k5_small.removeClass("eck-is-active");
                $( '.eck-company-info > p'  ).replaceWith( '<p>"Turn Your Ideas Into Reality". From development to business management, students are building ' +
                    'relationships with others and determining their own responsibilities and goals while working on live startup projects.</p>' );
            });
            k5.click(function(){
                bpl_small.removeClass("eck-is-active");
                portal_small.removeClass("eck-is-active");
                k5_small.addClass("eck-is-active");
                $( '.eck-company-info > p'  ).replaceWith( "<p>K5 Ventures is an early stage venture fund that partners with and " +
                    "invests in technology-driven businesses led by visionary founders. K5 Ventures invests in companies that focus on " +
                    "big and impactful ideas leading to unique products and services.</p>" );
            });
    });
})();