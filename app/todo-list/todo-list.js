
'use strict';

angular.module('myApp.todoList', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/todoList', {
            templateUrl: 'todo-list/todo-list.html',
            controller: 'todoListCtrl'
        });
    }])

    .controller('todoListCtrl', ['$scope', function ($scope) {

        $scope.todoList = [{todoText:'Clean House', done:false}];

        // $scope.todoList = [];

        $scope.todoAdd = function () {
            $scope.todoList.push({todoText:$scope.todoInput, done:false});
            $scope.todoInput = "";
        };

        $scope.remove = function () {
            var oldList = $scope.todoList;
            $scope.todoList = [];
            angular.forEach(oldList, function (x) {
                if (!x.done) $scope.todoList.push(x);
            });
        };

    }]);