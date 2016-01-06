module.exports = function(grunt) {
  grunt.initConfig({
    jshint: ['Gruntfile.js'],
    less: {
      compile: {
        files: {
          'build/css/compiled.css': ['public/css/layout.less', 'public/css/**/*.less']
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default', ['jshint']);
};
