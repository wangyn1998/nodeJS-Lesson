const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");
const querystring = require("querystring");

http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    switch(urlObj.pathname){
        case '/':
            showLogin(res);
            break;
        case '/login':
            loginIn(req,res);
            break;
        case '/home':
            showHome(req,res);
            break;
    }

}).listen(8082);
console.log("Server is listening 8081");
function showLogin(res){
    var filePath = path.join(__dirname,"login.html");
    var fileContent = fs.readFileSync(filePath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(fileContent);
    res.end();
}
function loginIn(req,res){
    var formData = "";
    req.on("data",function(chunk){
        formData += chunk;
    })
    req.on("end",function(){
        var formObj = querystring.parse(formData);
        if(formObj.username == "Zhangsan" && formObj.pwd == "123"){
            res.setHeader("set-Cookie","username=Zhangsan;max-age=60");
            res.end("Login sucess");
        }
        else{
            res.end("login error");
        }
    })
}
function showHome(req,res){
    var cookie = req.headers["cookie"];
    if(cookie==undefined){
        showLogin(res);
    }
    else if(cookie.indexOf("username") >= 0){
        res.end("home page");
    }
    else{
        showLogin(res);
    }
}