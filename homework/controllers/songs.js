var express = require('express');
var app = express();
var songRouter = express.Router();
var SongQuery = require('../client/db/SongQuery');
var query = new SongQuery();

songRouter.get('/:id', function(req, res){
  res.json(songs[req.params.id]);
});

songRouter.get('/', function(req, res) {
  query.all(function(results) {
    res.json(results);
  });
});

songRouter.put('/:id', function(req, res) {
  var song = new Song({
    title: req.body.title,
    band: req.body.band
  });
  songs[req.params.id] = song;
  res.json({data: songs});
});

songRouter.post('/', function(req, res) {
  var film = new Film({
    title: req.body.title,
    band: req.body.band 
  });
  songs.push(song);
  res.json({data: songs});
});

songRouter.delete('/:id', function(req, res) {
  songs.splice(req.params.id, 1);
  res.json({data: songs});
});

module.exports = songRouter;