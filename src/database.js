'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/grocery-items', function(err) {
  if(err) {
    console.log('Failed to connect to mongo');
  } else {
    console.log('Successfully connected to mongo');
  }
});
