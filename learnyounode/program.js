//console.log('HELLO WORLD');

//console.log(process.argv) 
//var arrylen =  process.argv.length;


function sum (input) {
	var total = 0
	for (i = 2; i < input.length; i++){

		total += Number(input[i]);
	}
	return total;
}


console.log(sum(process.argv));
