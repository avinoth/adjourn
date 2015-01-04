var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('manage', {title: 'adjourn - the lightweight journal'});
});

module.exports = router;
