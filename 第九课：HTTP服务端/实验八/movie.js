const cheerio = require("cheerio");
const querystring = require("querystring");
const http = require("http");
const https = require("https");
const fs = require("fs");
const url = require("url");

http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathName = urlObj.pathname;
    if(pathName == "/"){
        var fileContent = fs.readFileSync("index.html");
        res.writeHead(200,{"Content-Type":"text.html"});
        res.write(fileContent);
        res.end();
    }
    else if(req.url == "/getlist"){
        https.get("https://maoyan.com/films",function(resObj){
            var result="";
            resObj.on("data",function(chunk){
                result += chunk;
            })
            resObj.on("end",function(){
                var $ =cheerio.load(result);
                var movieList = [];
                $(".movie-item-title a").each(function(){
                    var movie = {};
                    movie.movieId = $(this).attr("data-val").slice(9,-1);
                    movie.movieName = $(this).text();
                    if(isNaN(parseInt($(this).parent().next().text()))){
                        movie.movieRange = "暂无评分";
                    }
                    else{
                        movie.movieRange = $(this).parent().next().children("");
                    }
                    movie.movieRange = "暂无评分";
                    console.log(movie);
                });
                res.writeHead(200,{"content-type":"text/plain"});
                res.end(JSON.stringify(movieList));
            })
        })
    }
}).listen(8083);
