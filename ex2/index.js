var args = process.argv;
var total= 0;
args.forEach(function(v,i){
	if( i<2 ){ return; };
	total+=parseFloat(v);
});
console.log(total);