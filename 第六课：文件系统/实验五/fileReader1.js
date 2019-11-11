const fs = require("fs");
const path = require("path");
const http = require("http");
var fileName = process.argv[2];

http.createServer(function(req,res){
    if(fileName == undefined){
        var str = "";
        /**
         * fs.readFile()是一个异步方法，执行到该句不会等待
         * 文件读取完成，就直接执行后面与语句。
         * 回调函数时等到文件读取完成之后菜执行
         */
        fs.readFile(process.argv[1],function(err,data){
            if(err){
                console.log(err);
            }
            else{
                res.end(data.toString());
            }
        })
    }
    
    else{
        var filePath = path.join(__dirname,fileName);
        if(fs.existsSync(filePath)){
            fs.readFile(filePath,function(err,data){
                if(err){
                    console.log(err);
                }
                else{
                    res.end(data.toString());
                }
            })
        }
        else{
            res.writeHead(200,{'Content-Type':'text/html;charset=UTF8'});
            res.end("文件不存在！！！");
        }   
    }
    
}).listen(8081);