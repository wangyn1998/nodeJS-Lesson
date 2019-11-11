var http = require("http");
var url = require("url");
var path = require("path");
var fs = require("fs");
var querystring = require("querystring");

http.createServer(function(req,res){
    var urlObj = url.parse(req.url);
    var pathName = urlObj.pathname;
    if(pathName == '/'){
        if(req.method == "GET"){
            showLogin(req,res);
        }
        else if(req.method == "POST"){
            loginIn(req,res);
        }
    }
    else if(pathName =="/list"){
        showList(req,res);
    }
    else if(pathName == "/login_bg.jpg"){
        var imgPath = path.join(__dirname,"./login_bg.jpg");
        var imgContent = fs.readFileSync(imgPath);
        res.writeHead(200,{"Content-Type":"image/jpg"});
        res.end(imgContent);
    }
    else if(pathName =="/bg.jpg"){
        var imgPath = path.join(__dirname,"./bg.jpg");
        var imgContent = fs.readFileSync(imgPath);
        res.writeHead(200,{"Content-Type":"image/jpg"});
        res.end(imgContent);
    }
}).listen(8081);
function showLogin(req,res){
    var indexPath = path.join(__dirname,"./login.html");
    var fileContent = fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(fileContent);
}
function loginIn(req,res){
    var formData = "";
    req.on("data",function(chunk){
        formData += chunk;
    })
    req.on("end",function(){
        var formObj = querystring.parse(formData);
        console.log(formObj);
        if(formObj.username == "admin" && formObj.pwd == "admin"){
            res.setHeader("set-Cookie","username=admin pwd=admin;max-age=60");
            var cookie = req.headers["cookie"];
            res.end("success");
        }
        else{
            res.end("login error");
        }
    })
}
function showList(req,res){
    cookie = req.headers["cookie"];
    if(cookie == "username=admin pwd=admin"){
        var indexPath = path.join(__dirname,"./list.html");
        var fileContent = fs.readFileSync(indexPath);
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(fileContent);
    }
    else{
        res.end("先登录");
    }
    
}