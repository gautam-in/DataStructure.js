module.exports = function(grunt){

	grunt.config('jshint', {
		all: [
			'js/**/*.js',
			'!js/vendor/**/*.js',
			'!js/main.min.js'
		],
		options: {
			jshintrc: '.jshintrc',
			reporter: require('jshint-stylish')
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');

};