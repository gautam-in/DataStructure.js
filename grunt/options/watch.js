module.exports = function(grunt){

    grunt.config('watch', {
        js: {
        	files: ['js/**/*.js'],
        	tasks: ['jshint', 'jscs']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');

};
