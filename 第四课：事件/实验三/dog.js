// const events = require("events");
// const EventEmitter = events.EventEmitter;

// function Dog(name,energy){
//     EventEmitter.call(this);
//     this.name = name;
//     this.energy = energy;
//     var that = this;
//     setTimeout(function(){
//         that.emit("bark");
//     },1000);
// }

// Dog.prototype.__proto__ = EventEmitter.prototype;
// module.exports =  Dog

const events = require("events");
const EventEmitter = events.EventEmitter;

function Dog(name,energy){
    EventEmitter.call(this);
    this.name = name;
    this.energy = energy;
}

Dog.prototype.__proto__ = EventEmitter.prototype;
module.exports =  Dog