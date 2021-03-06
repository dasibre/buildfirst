'use strict';
var grunt = require('grunt');

module.exports = function(grunt){
  grunt.registerTask('db_create', 'Creates the database for the first time', function(){
    var connect = require('./lib/connect.js');
    var mongoose = require('mongoose');
    var done = this.async();
    var options = grunt.config('db_create');
    var util = require('./lib/util.js');
    var uri = options.uri + options.name;

    util.dropdatabase(options.name);

    connect(uri,create);

    function create(connection) {
      grunt.log.write('Creating "' + uri + '"...');
      var dev = connection.Schema({
        name: String
      })
      var Dev = connection.model('Dev', dev);
      new Dev({name: "buildfirst Schema"}).save()
      done();
    }
  })
}
