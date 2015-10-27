module.exports = function(grunt){

	grunt.config('requirejs', {
  		compile: {
		    options: {
			  baseUrl: "js/",
				mainConfigFile: "js/main.js",
				optimize: "none",
		      	name: "main",
		      	out: "js/main.min.js",
				include: "vendor/require/require",
				generateSourceMaps: true,
				preserveLicenseComments: false
		    }
		}
	  });

	grunt.loadNpmTasks('grunt-contrib-requirejs');

};
