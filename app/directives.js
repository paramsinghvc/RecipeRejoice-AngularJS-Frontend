define([
    'angular',
    'directives/fancybox',
    'directives/fileModel'

], function(
    angular,
    fancybox,
    fileModel
) {
    angular
        .module('reciperejoice.directives', [])
        .directive('fancybox', fancybox)
        .directive('fileModel', fileModel)

})
