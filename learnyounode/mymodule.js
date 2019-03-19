var fs = require('fs');
var path = require ('path');

module.exports = function (dir,filter,callback) { 
    var modfilter = '.' + filter;
	fs.readdir(dir, function (error, list) {
	  if (error) return callback(error)

          list = list.filter(function (file) {  
            return path.extname(file) === modfilter 
          })  
       
          callback(null, list) 
   })
}


