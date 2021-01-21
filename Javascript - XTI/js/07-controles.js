var a=1; //variaveis
function dividir(){}//para acoes
if(x>=2){} else; //condicionais
switch(x){case 1: alert(x);} // avaliações de vários valores

//loops
for(var i=0; i<3; i++){}
var array = new Array(1, 2, 3);
    for(var i=0; i<array.length; i++){alert(array[i]);}

var i=0;
while(i<3){ i++ }
alert(i);

do{}
while(i<3){
    alert(i);   
}



//objetos
var Carro ={
    marca: "Nissan",
    modelo: "350Z",
    comprimento: "3.34mm",
    velocidade: "320km/h",
    cavalos: "350"
};
for(var props in Carro){
    alert(props + " "+ Carro[props]);
}



//error
