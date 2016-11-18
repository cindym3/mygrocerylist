'use strict';

var express = require('express');
var router = require('./api');
var parser = require('body-parser');

var app = express();

require('./database');
require('./seed');

//serve static files in public directory
app.use('/',express.static('public'));
app.use(parser.json());

app.use('/api', router);

//express serving files to localhost:3001
app.listen(3001, function() {
  console.log("The server is running on port 3001!");
})
