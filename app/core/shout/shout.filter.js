'use strict';

angular.
    module('core')
    .filter('shout', function() {
       return function(input) {
           return input.toUpperCase() + '!!!';
       }
    });