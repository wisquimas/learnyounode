// JavaScript Document
module.exports = function( dir, ext, callback ){
	var fs  = require('fs');
	fs.readdir( dir, contar_files );
	
	function contar_files( err, data ){
		if (err){
			return callback( err );
		};
		var array_data = [];
		data.forEach(function(v,i){
			if( v.indexOf('.'+ext) !== -1 ){
				array_data.push( v );
			};
		});
		callback( err, array_data );
	};
};