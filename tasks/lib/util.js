'use strict';

var grunt = require('grunt');
var dbclean = require('./cleardb')

module.exports = {
    handle: function(err){
        if(err){
          grunt.log.writeln('failed.');
          grunt.fatal(err);
        }

        grunt.log.writeln('done.');
    },
    dropdatabase: function(dbname) {
      dbclean(dbname);
      grunt.log.writeln('Dropped database ' + dbname);
    }
};
