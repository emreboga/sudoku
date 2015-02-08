module.exports = function(grunt) {

    // project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        browserify: {
            dist: {
                files: {
                    'build/scripts/sudoku.js': ['src/scripts/*.js']
                }
            }
        },

        concat: {
            css: {
                src: 'src/styles/**/*.css',
                dest: 'build/styles/sudoku.css'
            }
        },

        jade: {
            compile: {
                options: {
                    data: {
                        debug: false
                    },
                    pretty: true
                },
                files: {
                    'build/index.html': ['src/templates/index.jade']
                }
            }
        },

        watch: {
            browserify: {
                files: ['src/scripts/*.js'],
                tasks: ['default']
            },
            jade: {
                files: ['src/templates/*.jade'],
                tasks: ['default']
            },
            concat: {
                files: ['src/styles/**/*.css'],
                tasks: ['default']
            }
        }
    });

    // load required npm task modules
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // $ grunt || $ grunt default
    grunt.registerTask('default', ['browserify', 'jade', 'concat', 'watch']);

};
