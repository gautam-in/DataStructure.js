module.exports = function(grunt){

	grunt.config('jscs', {
		all: [
			'js/**/*.js',
			'!js/vendor/**/*.js',
			'!js/main.min.js'
		],
		options: {
			preset: 'wordpress'
		}
	});

	grunt.loadNpmTasks('grunt-jscs');

};