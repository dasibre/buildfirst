(function(){
  'use strict'
var exec = require('child_process').exec
var dbname = process.argv[2]
exec('mongo ' + dbname + ' --eval "db.dropDatabase()"',
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});
}());
