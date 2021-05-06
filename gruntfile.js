module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        
    sass: {
        dist: {
            options: {
                style: 'expanded'
            },
            files: {
                'css/main.css': 'styles/main.scss'
            }
        } 
    },
    watch: {

        css: {
            files: ['styles/*.scss'],
            tasks: ['sass'],
            options: {
                spawn: false
            }
        } 
    },
  });
  
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);
  };