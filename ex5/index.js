var fs  = require('fs');

var ext = process.argv[3];

var file= fs.readdir( process.argv[2], contar_files );

function contar_files( err, data ){
	if (err) throw err;
	data.forEach(function(v,i){
		if( v.indexOf('.'+ext) !== -1 ){
			console.log( v );
		};
	});
	console.log( total );
};