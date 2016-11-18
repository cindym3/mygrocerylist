'use strict';

var express = require('express');
var Item = require('../models/items');

var router = express.Router();

//LIST: get existing items
router.get('/items', function(req,res) {
  Item.find({}, function(err, items) {
    if(err) {
      return res.status(500).json({message: err.message});
    }
    res.json({items: items});
  });
});

//LIST: add POST route to create new list items, or send back err msg
router.post('/items', function(req, res) {
  var item = req.body;
  Item.create(item, function(err, item) {
    if(err) {
      return res.status(500).json({err:err.message});
    }
    res.json({'item': item, message: 'Item created'});
  })
});

//LIST: add PUT route to update existing items
router.put('/items/:id', function(req, res) {
  var id = req.params.id;
  var item = req.body;
  if(item && item._id !== id) {
    return res.status(500).json({err: "IDs don't match"})
  }
  Item.findByIdAndUpdate(id, item, {new: true}, function(err, item) {
    if(err) {
      return res.status(500).json({err:err.message});
    }
    res.json({'item': item, message: 'Item updated'});
  })
});

//LIST: add delete route to delete items

module.exports = router;
