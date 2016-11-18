'use strict';

var angular = require('angular');

angular.module("groceryListApp")
.directive('items', function() {
  return {
    templateUrl: 'templates/items.html',
    controller: 'mainCtrl',
    replace: true
  }
})
