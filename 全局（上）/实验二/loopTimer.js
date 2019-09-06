
// setInterval(function loop(){
//     console.log("I will loop forever!");
//     setTimeout(console.log("Game over!"),5000);
// },500);

function a(){
    setTimeout(function loop(){
        console.log("I will loop forever!");
    },5000);
    console.log('Game over!');
    process.exit();
    
}
a();
