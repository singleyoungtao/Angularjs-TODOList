'use strict';

angular.module('myApp').directive('inputAssert', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {
            if (!ngModel) return;
            ngModel.$parsers.push(function (textInput) {
                if (textInput.startsWith(' ')) {
                    ngModel.$setValidity('format', false);
                    return undefined;
                }

                if (textInput.length > 20) {
                    ngModel.$setValidity("maxsize", false);
                    return undefined;
                }
                return textInput;
            });
        }
    }
});