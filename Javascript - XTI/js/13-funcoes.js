function somar(x, y){
    return x+y;
}

alert(somar(2,5));

new Function("x","y", "alert(x+y);"); //anonima
var soma2 = new Function("x","y", "alert(x+y);"); //com nome

function (x, y){
    return x+y;
}

var  soma3 =function(x, y){
    return x+y;
}