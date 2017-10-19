/**
 * Created by DELL on 2017/10/18.
 */
app.controller('carController', ['$scope','carServer',function ($scope,carServer) {
        carServer.getCar()
            .then(function (result) {
                $scope.info = result.data;
            })
}]);