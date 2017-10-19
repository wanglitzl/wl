/**
 * Created by DELL on 2017/10/18.
 */
var app = angular.module('app',['ui.router']);
app.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('cars',{
            url:'/cars',
            templateUrl: 'App/view/wl.html',
            controller: 'carController'
        })
    $urlRouterProvider.otherwise('/cars','wl.html')
});