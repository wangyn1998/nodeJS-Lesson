const cheerio = require("cheerio");

// const $ = cheerio.load("<h1>hello spider</h1>");
const $ = cheerio.load("<ul><li>li node 1</li></ul>");

// $("h1").text("hello node");
// console.log($("h1").html());
$("ul").append("<li>li node 2</li>");

$("li").each(function(index,el){
    console.log($(this).text());
})