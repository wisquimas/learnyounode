var fs  = require('fs');
var file= fs.readFile( process.argv[2], contar_lineas );

function contar_lineas( err, data ){
	if (err) throw err;
	
	var str	= data.toString();
	console.log( str.split('\n').length-1 );
};