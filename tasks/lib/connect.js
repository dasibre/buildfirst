'use strict';
var grunt = require('grunt');

module.exports = function(uri,done) {
  var mongoose = require('mongoose');
  var util = require('./util.js');
  grunt.log.write('Connecting to MongoDb...');

  mongoose.connect(uri);
  var connection = mongoose.connection;

  connection.on('error',function(err){
    util.handle(err);
  });

  connection.once('open', function() {
    connection.db.collections(function (err, names) {
        console.log('names'); // [{ name: 'dbname.myCollection' }]
    });
    done(mongoose)
  });
}
