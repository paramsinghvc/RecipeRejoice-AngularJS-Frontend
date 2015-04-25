requirejs.config({

    baseUrl: '/app',
    waitSeconds: 0,
    paths: {
        angular: '../assets/js/vendor/angular.min',
        jquery: '../assets/js/vendor/jquery.min',
        ngRoute: '../assets/js/vendor/angular-route.min',
        sanitize: '../assets/js/vendor/angular-sanitize.min',
        moment: '../assets/js/vendor/moment.min',
        text: '../assets/js/vendor/text',
        uiBootstrap: '../assets/js/vendor/ui-bootstrap.min',
        underscore: '../assets/js/vendor/underscore-min',
        flatUi: '../assets/js/vendor/flat-ui',
        bootstrap: '../assets/js/vendor/bootstrap.min',
        // App Specific Paths
        config: '../app/config',
        app: '../app/app',
        api: '../app/services/api',
        ajax: '../app/services/ajax'
        
    },

    shim: {

        angular: {
            deps: ['jquery'],
            exports: 'angular'
        },
        flatUi: {
            deps: ['jquery']
        },
        ngRoute: {
            deps: ['angular'],
            exports: 'ngRoute'
        },
        uiBootstrap: {
            deps: ['angular']
        },
        bootstrap: {
            deps: ['jquery']
        },
        sanitize: {
            deps: ['angular'],
            exports: 'sanitize'
        }

    }
});


requirejs(['angular', 'app', 'routes'], function(angular, app, routes) {

    angular.bootstrap(document, ['reciperejoice']);
});
