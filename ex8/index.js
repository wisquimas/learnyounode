var url	= process.argv[2];
//var bl	= require('bl');

require('http').get( url, function( r ){
	r.setEncoding('utf-8');
	r.pipe(function(d){
		console.log(d);
	});
});