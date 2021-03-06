module.exports = function ( grunt ) {
	grunt.loadNpmTasks( 'grunt-contrib-qunit' );
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-jsonlint' );

	grunt.initConfig( {
		qunit: {
			all: [ 'test/qunit.html' ]
		},
		jshint: {
			all: [ 'Gruntfile.js', 'src/*.js', 'test/test_*.js' ]
		},
		jsonlint: {
			all: [ 'package.json', 'i18n/*.json', 'patterns/*.json' ]
		}
	} );

	grunt.registerTask( 'test', [ 'qunit', 'jshint', 'jsonlint' ] );
	grunt.registerTask( 'default', [ 'test' ] );
};
