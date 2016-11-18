'use strict';

var angular = require('angular');

angular.module("groceryListApp")
//dataservice defined and where data lives
.service('dataService', function($http, $q) {
  this.getItems = function(callback) {
    $http.get('/api/items').then(callback);
  };

  this.deleteItem = function(item) {
  console.log("The " + item.name + " has been deleted");
};

//save the items
  this.saveItems = function(items) {
    var queue = [];
    items.forEach(function(item) {
      var request;
      if(!item._id) {
        request = $http.post('/api/items', item)
      } else {
        request = $http.put('/api/items/' + item._id, item).then(function(result) {
          item = result.data.item;
          return item;
        })
      };
      queue.push(request);
    });
    return $q.all(queue).then(function(results) {
      console.log("I saved " + items.length + " items!")
    });
  };
});
