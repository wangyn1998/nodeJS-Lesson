const fs = require("fs");
const http = require("http");
const path = require("path");

http.createServer(function(req,res){
    var filePath = path.join(__dirname,process.argv[2]);
    var streamReader = fs.createReadStream(filePath);
    streamReader.pipe(res);
}).listen(8081);