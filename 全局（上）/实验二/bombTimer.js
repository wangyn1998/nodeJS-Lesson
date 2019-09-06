function Bomb(){
    var T = this;
    Bomb.prototype.message = "bomb!!!"
    Bomb.prototype.explode = function(){
        console.log(T.message);
    }
}

var bomb = new Bomb();
setTimeout(bomb.explode,2000);

