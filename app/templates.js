define([
        'angular',
        'app',
        'text!views/home.html',
        'text!views/nav.html'
    ],
    function(
        angular,
        app,
        homeHtml,
        navHtml
    ) {
        angular.module('reciperejoice').run(['$templateCache', function($t) {
            $t.put('home', homeHtml);
            $t.put('nav', navHtml);
        }])
    })
