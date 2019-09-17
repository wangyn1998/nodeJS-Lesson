
setInterval(function loop(){
    console.log("I will loop forever!");
},500);
setTimeout(function(){
    console.log('Game over!');
    process.exit();
},5000);



// var timerId = setTimeout(function(){
//     console.log("game over");
// },3000);
// //组织延时执行或者定时执行，回调函数执行
// timerId.unref();
// timerId.ref();