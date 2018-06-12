module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass : {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'src/css/tuxedo.css': 'src/scss/tuxedo.scss'
                }
            }
        },
        watch: {
            sass: {
                files: ['src/scss/*.scss'],
                tasks: ['sass'],
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.registerTask('default', ['uglify','sass']);
};
