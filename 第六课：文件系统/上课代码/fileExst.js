const fs = require("fs");
const path = require("path");
var filePath = path.join(__dirname,"/file.txt");
//判断文件或文件夹是否存
console.log(fs.existsSync(filePath));