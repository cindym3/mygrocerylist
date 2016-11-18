'use strict';

var angular = require('angular');

angular.module("groceryListApp")
.controller('mainCtrl', function($scope, dataService) {
  //create a new grocery list item and place it at the top of the list
  $scope.addItem = function() {
    var item = {name: "This is a new item."};
    $scope.items.unshift(item); //adds new items to the beginning of the list
  };

  $scope.helloWorld = dataService.helloWorld;

//get existing grocery items and display them on the page
  dataService.getItems(function(response) {
    var items = response.data.items;
    $scope.items = items;
  });
//delete one item from the list  when delete is clicked on the ui
  $scope.deleteItem = function(item, $index) {
    dataService.deleteItem(item);
    $scope.items.splice($index, 1);
  };

// save all items that have been edited on the ui, when save is clicked
  $scope.saveItems = function() {
    var filteredItems = $scope.items.filter(function(item) {
      if(item.edited) {
        return item;
      };
    });
    dataService.saveItems(filteredItems).finally($scope.resetItemState());
  };

  $scope.resetItemState = function() {
    $scope.items.forEach(function(item) {
      item.edited = false;
    });
  };
});
