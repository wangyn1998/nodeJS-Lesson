var userName = process.argv[2];
var password = process.argv[3];

if(userName != undefined && password != undefined){
    var loginStr = userName + ":" + password;
    var buf1 = Buffer.from(loginStr,"utf-8");
    var base64Str = buf1.toString("base64");
    console.log("用户名：" + userName + " 密码：" + password);
    console.log(base64Str);
}
else{
    console.log("用户名和密码不能为空");
}