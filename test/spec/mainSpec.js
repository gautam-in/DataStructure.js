require.config( {
    baseUrl: 'spec',
    paths: {
        'jasmine': '../libs/jasmine/jasmine',
        'jasmineHTML': '../libs/jasmine/jasmine-html',
        'customBoot': '../libs/jasmine/customBoot',
        'domReady': '../libs/require/domReady'
    },
    shim: {
        'jasmine': {
            'exports': 'jasmine'
        },
        'jasmineHTML': {
            'exports': 'jasmine',
            'deps': [
                'jasmine'
            ]
        }
    }
} );

require( [
    '!domReady',
    'jasmineHTML',
    'customBoot'
], function( domReady, jasmine, customBoot ) {
    require( [ 'specLoader' ], function() {
        customBoot.htmlReporter.initialize();
        customBoot.env.execute();
    } );
} );
