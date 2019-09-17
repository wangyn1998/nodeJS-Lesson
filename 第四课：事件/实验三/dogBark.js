// var dog = require("./Dog.js");
// var dog1 = new dog("zangao",8);
// var dog2 = new dog("taidi",4);

// dog1.on("bark",function(){
//     var max = this.energy
//     for(var i = 0;i<max+1;i++){
//         if(this.energy >= 0){
//             console.log(this.name + ":barked!!" + "energy:" + this.energy);
//             this.energy--;
//         }
//     }
// });
// dog2.on("bark",function(){
//     var max = this.energy
//     for(var i = 0;i<max+1;i++){
//         if(this.energy >= 0){
//             console.log(this.name + ":barked!!" + "energy:" + this.energy);
//             this.energy--;
//         }
//     }
    
// })


var dog = require("./Dog.js");
var dog1 = new dog("zangao",8);
// var dog2 = new dog("taidi",4);

function barkFun(){
    console.log(this.name + "barked!!!");
    console.log(this.energy);
}

dog1.on("bark",barkFun);
var intervallId = setInterval(function(){

    if(dog1.energy >= 0){
        dog1.emit("bark");
    }
    else{
        clearInterval(intervallId);
    }
    dog1.energy = dog1.energy - 1;
},1000);