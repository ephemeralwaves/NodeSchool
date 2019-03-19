var http = require ('http');

http.get(process.argv[2], function(res) {
    //checks for statusCode
	//console.log("Got response : " + res.statusCode);
    
    res.on('error', function(x) {
        console.log("Got error: " + e.message);
    });
    res.setEncoding('utf8');
    res.on("data",function(data) {
		console.log(data);
    }); 

});


