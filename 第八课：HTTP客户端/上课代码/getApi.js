const http = require("https");

var apiurl = "https://api.jisuapi.com/weather/query?appkey=6d074078756352b6&city=青岛"
apiurl = encodeURI(apiurl);

http.get(apiurl,function(req){
    var result ="";
    req.on("data",function(chunk){
        result += chunk;
    })
    req.on("end",function(){
        console.log(result);
    })
})