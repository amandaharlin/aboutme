module.exports = function (grunt) {


			grunt.initConfig({
				
				uglify: {
					my_target: {
						files: {
							'dest/output.min.js': ['src/cbpSplitLayout.js', 'src/classies.js', 'modernizr.custom.js']
						}
					}
				},

				cssmin: {
					combine: {
						files: {
							'dest/output.min.css': ['src/component.css', 'src/demo.css']
						}
					}
				}

			});


			// Load the plugin that provides the "uglify" task.
			grunt.loadNpmTasks('grunt-contrib-uglify');
			grunt.loadNpmTasks('grunt-contrib-cssmin');

			// Default task(s).
			grunt.registerTask('default', ['uglify', 'cssmin']);

		};