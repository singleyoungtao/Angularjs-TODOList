'use strict';

angular.module('myApp').directive('inputAndButton', function () {
    return {
        restrict: 'E',
        replace: true,
        controller: 'todoListCtrl',
        templateUrl: 'view/input-and-button.html'
    }
});