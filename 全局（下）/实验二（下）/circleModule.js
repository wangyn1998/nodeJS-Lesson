function circleFun(r){
    function circumference(){
        return Math.PI*2*r;
    }
    function area(){
        return Math.PI*r*r;
    }
    return {circumference:circumference,area:area};
}
module.exports = {
    circleFun : circleFun
}