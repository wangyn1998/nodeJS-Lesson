const cp =require("child_process");
/**
 * 执行shell指令，启动一个紫禁城
 * 
 * notedped mstsc
 * exec(命令，回调函数)
 * 除了可以启动node进程还可以执行shell命令启动进程
 *
 */
cp.exec("notepad",function(err,stdout,stderr){
    console.log(err);
    console.log(stdout);
    console.log(stderr);
})
//notepad 记事本