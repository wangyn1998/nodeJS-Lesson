const http = require("http");
http.createServer(function(req,res){
    // res.writeHead(200,{"Content-Type":"text/html"});
    // 响应内容字节长度
    // res.setHeader("Content-Length",20);
    //res.setHead("Content-Encoding","gzip");服务端压缩方式设置
    res.setHeader("Date",(new Date().toLocaleString()));
    res.setHeader("Set-Cookie","name=zhangsan");
    res.statusCode = 404;//状态码
    //500服务端错误
    res.end("hello world");
}).listen(8081);
console.log("Server is listening 8081");