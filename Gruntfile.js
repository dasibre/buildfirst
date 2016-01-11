module.exports = function(grunt) {
  grunt.initConfig({
    clean: {
      js: 'build/js',
      css: 'build/css',
      less: 'public/**/*.css'
    },
    timestamp: {
      foo: {
        file: 'foo'
      }
    },
    jshint: {
      server: ['Gruntfile.js'],
      client: ['public/js/**/*.js', '!public/js/vendor']
    },
    sprite: {
      icons: {
        src: 'public/img/icons/*.png',
        dest: 'build/img/icons.png',
        destCss: 'build/css/icons.css'
      }
    },
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
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('js', 'Concatenate and minify static Javascript assets',['concat:js', 'uglify:bundle']);
  grunt.registerTask('timestamp', function(){
    console.log(this);
    var options = this.options({
      file: '.timestamp' //take config and provide default values; this refers to initConfig
    });
    var timestamp = +new Date();
    var contents = timestamp.toString();
    grunt.file.write(options.file, contents);
  });
};
