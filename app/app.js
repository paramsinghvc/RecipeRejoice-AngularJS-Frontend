define([
    'angular',
    'jquery',
    'controllers',
    'directives',
    'filters',
    'services',
    'bootstrap',
    'ngRoute',
    'uiBootstrap',
    'config',

], function(
    angular,
    $,
    controllers,
    directives,
    filters,
    services,
    bootstrap,
    ngRoute,
    config

) {

    angular.module('reciperejoice', [
        'reciperejoice.controllers',
        'reciperejoice.services',
        'reciperejoice.directives',
        'reciperejoice.filters',
        'ui.bootstrap',
        'ngRoute'
    ]).config(function($interpolateProvider) {
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
    })
})
