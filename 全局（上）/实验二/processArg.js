if(process.argv[2] == undefined){
    console.log("帮助：命令参数需为算数运算式！");
}
else if(process.argv[2] == "-h"){
    console.log("帮助：命令参数需为算数运算式！")
}
else{
    console.log(process.argv[2] + "=%s",eval(process.argv[2]))
}