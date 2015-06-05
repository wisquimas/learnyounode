var url = 'http://localhost/learnyounode/ex7/';//process.argv[2]
require('http').get( url, function( r ){
	r.setEncoding('utf-8');
	r.on('data',console.log);
});