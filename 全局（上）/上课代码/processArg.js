/**
 * 1、传入命令行参数，是一个算术运算时 1 * 2 + 3
 * 2、程序将算术运算计算得到结果，并且在控制台输出
 * 1 * 2 + 3 = 5;  eval()
 * 3、程序判断一下是否传入了命令行参数，如果没有传入
 * 控制输出，"命令行参数错误！"
 * 
 */

if(process.argv[2] == undefined){
    console.log("命令行参数错误！");
}
else if(process.argv[2] == "-help"){
    console.log("帮助：命令参数需为算数运算式！")
}
else{
    console.log(process.argv[2] + "=%s",eval(process.argv[2]))
}