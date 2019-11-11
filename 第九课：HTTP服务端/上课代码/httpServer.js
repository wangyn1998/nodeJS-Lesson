const http = require("http");

const server = new http.Server();
Server.listen(8081);
server.on("request",function(req,res){
    res.end("hello node");
})