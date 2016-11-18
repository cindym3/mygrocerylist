webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module("groceryListApp", [])

	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

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


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

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


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module("groceryListApp")
	.directive('items', function() {
	  return {
	    templateUrl: 'templates/items.html',
	    controller: 'mainCtrl',
	    replace: true
	  }
	})


/***/ }
]);