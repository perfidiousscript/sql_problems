/**
 * Created by samuelmoss on 11/16/15.
 */
var dbApp = angular.module('dbApp', ['ngRoute']);

dbApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/date', {
            templateUrl:"views/routes/date.html",
            controller: "DateController"
        }).
        when('/address', {
            templateUrl:"views/routes/address.html",
            controller: "AddressController"
        }).
        otherwise({
            redirectTo: '/address'
        })
}]);