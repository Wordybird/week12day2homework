var MongoClient = require('mongodb').MongoClient;

var SongQuery = function() {
  this.url = 'mongodb://localhost:27017/songs_site';
};

SongQuery.prototype = {
  all: function(onQueryFinished) {
    MongoClient.connect(this.url, function(err, db) {
      var collection = db.collection('songs');
      collection.find().toArray(function(err, docs) {
        onQueryFinished(docs);
      });
    })
  }
};

module.exports = SongQuery;