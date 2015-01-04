var express = require('express');
var router = express.Router();
var fs = require('fs');

router.post('/addentry', function(req, res) {
  title = req.body.head;
  content = req.body.content
  fs.writeFile(destDir + title + '.txt', content);

  writeContent(function(err, done) {
    if (err) throw err;
    console.log("Finshed writing the content. Starting log writing");
    tracker.created.push({title: title, time: new Date()});
    fs.writeFileSync('tracker.json', JSON.stringify(tracker, null, 4));
    console.log("Finished writing log files");
  });
  res.redirect('/')
  });

function writeContent(callback) {
    fs.writeFile(destDir + title + '.txt', content, function(err) {
      if(err) return callback(err);
      callback(null, "done")
    });
  };

module.exports = router;
