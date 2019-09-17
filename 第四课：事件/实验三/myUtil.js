const util = require("util");

function Parent(name){
    this.name = name;
}
Parent.prototype.show = function(){
    console.log(this.name);
}
function Child(){

}
util.inherits(Child,Parent);

/**
 * 1、Parent.call(this)
 * Chile.prototype.__proto__=Parent.protorype
 * 2、 Child extends Parent{}
 * 3、util.inherits(Child,Parent)
 */