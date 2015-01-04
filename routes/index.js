var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  createdTotal = tracker.created.length
  res.render('index', { title: 'adjourn - the lightweight journal', total: createdTotal});
});

module.exports = router;
