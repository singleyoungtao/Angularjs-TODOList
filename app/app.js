'use strict';

angular.module('myApp', [
    'ngRoute',
    'myApp.todoList'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/todoList'});
}]);
