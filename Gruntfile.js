module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            css: {
                src: [
                    'assets/css/main.css'
                ],
                dest: 'assets/css/lib.min.css'
            },
        },
        sass: {
            dist: {
                files: {
                    'assets/css/main.css': 'assets/sass/main.scss'
                }
            }
        },
        cssmin: {
            css: {
                src: 'assets/css/lib.min.css',
                dest: 'assets/css/lib.min.css'
            }
        },

        autoprefixer: {
            dest: {
                src: "assets/css/main.css"
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.registerTask('default', ['sass', 'concat', 'cssmin', 'autoprefixer' ]);
};
