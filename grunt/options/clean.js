module.exports = function(grunt){

    grunt.config('clean', {
        options: {
            force: true
        },
        rjs: [
            '<%= basePath %>/js/main.min.js'
        ]
    });

    grunt.loadNpmTasks('grunt-contrib-clean');

};
