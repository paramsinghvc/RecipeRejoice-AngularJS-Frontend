define([
    'angular',
    'jquery',
    'controllers',
    'directives',
    'filters',
    'services',
    'bootstrap',
    'sanitize',
    'ngRoute',
    'uiBootstrap',
    'config',
    'ngImgCrop'

], function(
    angular,
    $,
    controllers,
    directives,
    filters,
    services,
    bootstrap,
    sanitize,
    ngRoute,
    config,
    ngImgCrop

) {

    angular.module('reciperejoice', [
        'reciperejoice.controllers',
        'reciperejoice.services',
        'reciperejoice.directives',
        'reciperejoice.filters',
        'ui.bootstrap',
        'ngRoute',
        'ngSanitize',
        'ngImgCrop'
    ]).config(function($interpolateProvider) {
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
    })
})
