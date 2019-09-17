const http = require("http");
const fs = require("fs");
const path = require("path");
var server = http.createServer(function(req,res){
    var filePath = path.join(__dirname + "/views/view.html");
    var fileContent = fs.readFileSync(filePath);
    fileContent = fileContent.toString("utf8");
    res.writeHead(200,{"Content-type":"text/html"});
    res.write(fileContent);
    res.end();
});
server.listen(8080);
console.log("server is listening 8080");