define([
        'angular',
        'controllers/masterCtrl',
        'controllers/homeCtrl',
    ],
    function(
        angular,
        masterCtrl,
        homeCtrl
    ) {
        angular
            .module('reciperejoice.controllers', [])
            .controller('masterCtrl', masterCtrl)
            .controller('homeCtrl', homeCtrl)
    })
