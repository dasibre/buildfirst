module.exports = function(grunt) {
  grunt.initConfig({
    jshint: ['Gruntfile.js'],
    concat: {
      js: {
        files: {
          'build/js/bundle.js': 'public/js/**/*.js'
        }
      }
    },
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
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['jshint']);
};
