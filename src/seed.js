'use strict';

var Item = require('./models/items.js');

var items = [
  'candy',
  'soda',
  'chips'
];

items.forEach(function(item, index) {
  Item.find({'name': item}, function(err, items) {
    if(!err && !items.length) {
      Item.create({completed: false, name: item});
    };
  });
});
