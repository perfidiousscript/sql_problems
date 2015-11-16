/**
 * Created by samuelmoss on 11/16/15.
 */
var dbApp = angular.module('dbApp', ['ngRoute']);

dbApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/date', {
            templateUrl:"views/routes/date.html"
        }).
        when('/address', {
            templateUrl:"views/routes/address.html"
        }).
        otherwise({
            redirectTo: '/date'
        })
}]);