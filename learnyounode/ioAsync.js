var fs = require('fs') ;

//var sampletxt = fs.readFile('sample.txt', finishReading);
var sampletxt = fs.readFile(process.argv[2], finishReading);


function finishReading(error, data) {
  if (error) return console.error(error)
  // do something with the data
	var str = data.toString();
	console.log(str.split('\n').length - 1);


}
