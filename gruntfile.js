module.exports = function(grunt) {

    // project configuration
    grunt.initConfig({

        // Module management
        browserify: {
            dist: {
                files: {
                    'build/scripts/sudoku.js': [
                        'src/templates/compiled/*.js',
                        'src/scripts/*.js'
                    ]
                },
                options: {
                }
            }
        },

        // CSS bundling
        concat: {
            css: {
                src: 'src/styles/**/*.css',
                dest: 'build/styles/sudoku.css'
            }
        },

        // Copying static resources/libraries
        copy: {
            main: {
                files: [
                    { src: ['**/*.html'], dest: 'build/', expand: true, cwd: 'src/html'},
                    { src: ['jade-runtime.js'], dest: 'build/scripts', expand: true, cwd: 'src/scripts'}
                ]
            }
        },

        // Template compilation
        jade: {
            compile: {
                options: {
                    client: true,
                    namespace: 'Templates',
                    processName: function(filename) {
                        return filename.substring(14, filename.length - 5).toLowerCase();
                    }
                },
                files: {
                    'src/templates/compiled/templates.js': ['src/templates/*.jade']
                }
            }
        },

        // Watching changes to trigger the matching task(s)
        watch: {
            grunt: {
                files: ['./gruntfile.js']
            },
            browserify: {
                files: ['src/scripts/*.js'],
                tasks: ['browserify']
            },
            jade: {
                files: ['src/templates/*.jade'],
                tasks: ['jade']
            },
            concat: {
                files: ['src/styles/**/*.css'],
                tasks: ['concat']
            },
            copy: {
                files: ['src/html/index.html'],
                tasks: ['copy']
            }
        }
    });

    // load required npm task modules
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // $ grunt || $ grunt default
    grunt.registerTask('default', ['jade', 'concat', 'copy', 'browserify', 'watch']);

    // $ grunt build
    grunt.registerTask('build', ['jade', 'concat', 'copy', 'browserify']);

};
