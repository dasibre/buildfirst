(function(){
  'use strict'
var exec = require('child_process').exec
var grunt = require('grunt');
module.exports = function(dbname) {
  console.log('dropping database');
  exec('mongo ' + dbname + ' --eval "db.dropDatabase()"',
   function (error, stdout, stderr) {
     grunt.log.writeln('stdout: ' + stdout);
     grunt.log.writeln('stderr: ' + stderr);
     if (error !== null) {
       grunt.log.writeln('exec error: ' + error);
     }
   });
}
}());
