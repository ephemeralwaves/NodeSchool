var fs = require('fs');
var path = require('path');
var sampletxt = fs.readdir(process.argv[2], finishReading);
var filefilter = '.' + process.argv[3];

function finishReading(error, list) {
  if (error) return console.error(error)
       // console.log(list);

	for (i=0;i<list.length;i++)
	{
		pathname = path.extname(list[i]);
		//console.log(pathname);
		if (pathname == filefilter)
		{
			console.log(list[i])
		}  
	}

}


