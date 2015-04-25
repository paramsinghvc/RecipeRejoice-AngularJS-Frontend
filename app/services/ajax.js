define(
    ['jquery'],
    function(jquery) {
        return [
            '$rootScope', '$q',
            function($rootScope, $q) {

                var inWorks = [];

                var ajax = function(options) {

                    var deferred = $q.defer();

                    var identifier = {};          
                    $('.loader').modal('show');
                    var success = function(data, status, xhr) {
                        $rootScope.$apply(function() {
                            // setting the ajax inWorks thingy
                            inWorks = inWorks.filter(function(id) {
                                return id !== identifier;
                            });
                            $('.loader').modal('hide');
                            deferred.resolve({
                                data: data,
                                status: status,
                                xhr: xhr
                            });
                        });
                    };

                    var error = function(xhr) {
                        try {
                            var data = JSON.parse(xhr.responseText);
                        } catch (e) {
                            var data = xhr.responseText;
                        }
                        $('.loader').modal('hide');
                        var status = xhr.status;

                        if (status === 401 || status === 403) {
                            $rootScope.$broadcast('auth-failed')
                        }

                        $rootScope.$apply(function() {
                            // setting the ajax inWorks thingy
                            inWorks = inWorks.filter(function(id) {
                                return id !== identifier;
                            });

                            deferred.reject({
                                status: status,
                                data: data,
                                xhr: xhr
                            });
                        });
                    }

                    options.data = options.data || {};
                    options.type = options.type || 'GET';
                    options.dataType = options.dataType || 'json';              
                    options.xhrFields = {
                        withCredentials: true
                    }


                    // push the identifier in inWorks
                    inWorks.push(identifier);

                    jquery.ajax(options).done(success).fail(error);

                    return deferred.promise

                };

                ajax.inWorks = function() {
                    return inWorks.length > 0;
                };

                var methods = ['get', 'put', 'post', 'delete'],
                    l = methods.length,
                    i = 0;

                for (; i < l; i++) {
                    var m = methods[i];
                    (function(m) {
                        ajax[m] = function(options) {
                            options.type = m.toUpperCase()
                            return ajax(options).then(function(res) {
                                return res.data;
                            });
                        }
                    })(m);

                }

                return ajax;
            }
        ]
    })
