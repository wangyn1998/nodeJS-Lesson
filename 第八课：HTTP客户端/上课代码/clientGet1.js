const http = require("https");
/**
 * https1是在http基础上进行SSL加密
 * 让数据不再明文传输
 */
http.get("https://www.baidu.com/",function(res){
    var result = "";
    res.on("data",function(chunk){
        result += chunk;
    })
    res.on("end",function(){
        console.log(result);
    })
})