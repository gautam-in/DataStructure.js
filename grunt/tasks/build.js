module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('build', [
        'clean:rjs',
        'jshint',
        'jscs',
        'requirejs'
    ]);
};
