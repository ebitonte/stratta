var express = require('express');
var router = express.Router();

//TODO: just a dummy route. replace with actual index route
router.get('/', function(req, res) {
  res.send('Hello World!');
});

module.exports = router;
