var mymodule = require('./module');

mymodule( process.argv[2], process.argv[3], imprimir_datos );

function imprimir_datos( err, data ){
	if (err) throw err;
	data.forEach(function(v,i){
		console.log( v );
	});
};