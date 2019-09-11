var base64Str = 'emhhbmdzYW46MTIzNDU2'
var buf = Buffer.from(base64Str,"base64");
var buf1 = buf.slice(0,8);
var buf2 = buf.slice(9,15);
console.log("用户名：" + buf1.toString("utf8") + "密码：" +  buf2.toString("utf8"));