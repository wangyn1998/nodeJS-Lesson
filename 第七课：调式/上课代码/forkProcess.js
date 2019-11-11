//fork()  专门用来启动node进程，并且父进程可以和子进程通信
const cp =require("child_process");
var fork1 = cp.fork("childProcess1.js",["javascript"]);

fork1.on("close",function(chunk){
    console.log(chunk.toString());
})
fork1.on("message",function(msg){
    console.log(msg);
})
fork1.send("parent");//父进程向子进程发送
fork1.on("message",function(msg){
    console.log(msg);
})