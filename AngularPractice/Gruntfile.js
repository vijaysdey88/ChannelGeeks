module.exports = function(grunt) {

	grunt.registerTask('hello', function() {
		console.log('Hello World!!!');
	});

	grunt.initConfig({
	  connect: {
	    server: {
	      options: {
	        port: 9090,
	        base: '.',
	        keepalive: true,
	        livereload: true
	      }
	    }
	  },
	  watch: {
		  html: {
		    files: ['./*'],
		    tasks: ['connect']
		  },
		},
	});


	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['connect:server', 'watch']);

};
