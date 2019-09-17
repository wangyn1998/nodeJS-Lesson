/**
 * 请求localhost:8081
 * 响应列表
 * <ul>
 *  <li>
 *      <a href = "/file?filed=">文件名称</a>
 *  </li>
 *  <li>
 *      <a href = "/file?filed=">文件名称</a>
 *  <li>
 * </a>
 * 
 * 点击超链接时，将超链接对应文件内容响应到页面显示
 * 
 */

 const http = require("http");
 const url = require("url");
 const fs = require("fs");
 const path = require("path");

 http.createServer(httpManger).listen(8081)
 function httpManger(req,res){
    var reqObj = url.parse(req.url,true);
    var pathName = reqObj.pathname;
    switch(pathName){
        case"/":
            showIndex(res);
            break;
        case"/file":
            showFile(reqObj,res);
            break;
        default:
            res.end("error");
            break;
    }
 }
 var fileList = ["t1.txt","t2.txt"];
function showIndex(res){
    var str = "<ul>";
    for(var i = 0 ;i<fileList.length;i++){
        var liNode = "<li><a href = '/file?fileId=" + i +"'>" + fileList[i] + "</a></li>";
        str +=liNode; 
    }
    str = str + "</ul>";
    res.writeHead(200,{"Content-type":"text/html"});
    res.write(str);
    res.end();
}
function showFile(reqObj,res){
    var fileId = reqObj.query.fileId;
    var fileName = fileList[fileId];
    var filePath = path.join(__dirname,"/" + fileName);
    var fileContent  = fs.readFileSync(filePath);
    res.end(fileContent);
}