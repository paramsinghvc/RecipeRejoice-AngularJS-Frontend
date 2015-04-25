define(['config'], function (config) {
  return [
    'ajax', 
    function (ajax) {
      var factory = function (scope) {

        scope = scope === undefined ? '' : scope + '/';

        var api = {};

        var methods = ['get', 'put', 'post', 'delete'], l = methods.length, i = 0;

        for(;i<l;i++) {
          var m = methods[i];

          api[m] = (function (m) {
            return function (uri, options) {
              if(options === undefined)
                options = {};
              
              options.url = config.apiBase + scope + uri;
              if(options.auth == true)
                options.url = config.authBase;
              if(options.token == true)
                options.url = config.authBase+'/token';
              return ajax[m](options);
            }
          })(m);
        }

        api.scope = factory;

        return api;

      }

      return factory();
    }
  ];
})