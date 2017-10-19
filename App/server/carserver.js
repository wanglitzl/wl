/**
 * Created by DELL on 2017/10/18.
 */
app.factory('carServer',['service', function (service) {
    var factorys ={
        getCar: function () {
           return service.ajax('get','./Data/data.json');
        }
    };
    return factorys
}]);