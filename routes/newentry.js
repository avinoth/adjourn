var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('newentry', { title: 'adjourn - the lightweight journal'});
});

module.exports = router;
