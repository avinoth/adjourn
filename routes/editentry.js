var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('editentry', { title: 'adjourn - the lightweight journal', entrytitle: 'some title', entrycontent: 'some content'});
});

module.exports = router;
