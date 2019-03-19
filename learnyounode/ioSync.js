//Takes in a file, reads it, and states how many lines there are
var fs = require('fs') ;

//var sampletxt = fs.readFileSync('sample.txt');
var sampletxt = fs.readFileSync(process.argv[2]);

var str = sampletxt.toString();

console.log(str.split('\n').length - 1);

//console.log(str);
