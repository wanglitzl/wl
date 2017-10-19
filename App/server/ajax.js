/**
 * Created by DELL on 2017/10/18.
 */
app.factory('service', function ($http,$q) {
    return {
        ajax: function (type, url) {
            var defer = $q.defer();
            var config={
                method: type,
                url: url
            };
            $http(config)
                .then(function (data) {
                    defer.resolve(data);
                }, function (err) {
                    defer.reject(err);
                });
            return defer.promise;
        }
    };
});