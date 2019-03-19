var filterdir = require('./mymodule.js')  

filterdir(process.argv[2],process.argv[3], callback);

function callback (err,list) {
	if(err) throw err;
	else{
		list.forEach(function(file){
			console.log(file)
	    })
    }
}
