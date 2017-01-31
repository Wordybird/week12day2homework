var express = require('express');
var router = express.Router();
var path = require('path');

router.use('/api/songs', require('./songs'));

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

router.get('/about', function(req, res){
  res.json({data: "All about us!"});
})

router.post('/', function(req, res) {
  res.json({})
})

module.exports = router;