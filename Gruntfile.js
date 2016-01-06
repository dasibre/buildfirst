module.exports = function(grunt) {
  grunt.initConfig({
    jshint: ['Gruntfile.js'],
    uglify: {
      cobra: {
        files: {
          'build/js/cobra.min.js': 'public/js/cobra.js'
        }
      },
      bundle: {
        files: {
          'build/js/bundle.min.js': 'build/js/bundle.js'
        }
      }
    },
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
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['jshint']);
};
