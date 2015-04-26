define(
    ['fancybox', 'fancyboxThumbs', 'fancyboxButtons', 'jquery', 'angular'],
    function(fancybox, fancyboxThumbs, fancyboxButtons, $, angular) {
        return [
            function() {
                return {
                    restrict: 'E',
                    replace: true,
                    link: function(scope, element, attrs) {
                        $(element).find(".fancybox-thumb").fancybox({
                            prevEffect: 'none',
                            nextEffect: 'none',
                            openEffect: 'elastic',
                            closeEffect: 'elastic',

                            helpers: {
                                title: {
                                    type: 'outside'
                                },
                                thumbs: {
                                    width: 50,
                                    height: 50
                                }
                            }
                        });

                    }

                }
            }
        ];
    })
