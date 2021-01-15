/* autor: Micaela Paulina
    descricao: estudo dos operadores
*/

alert(3+5);//binario
alert(-8);//unario
alert(8*4/6*5);//ternario

var x = 5+6;
alert(x);//

var y = "0la"+"Pessoal";
alert(y);

var z = 43 - 11;
alert(z);

var a = 42.3 * 54.33;
alert(a);

var b = 42.3 / 54.33;
alert(b);

var c = 2%1;
alert(c);

//aula 09
var d = +8;//+"43" transforma em numero
alert(d);

var e = -5;
alert(e);

var f = 1;
var g = f++;
alert("F: "+f);
alert("G: "+g);

//aula 10
var h = 6;
alert(h == 6);
alert(h === "6"); //valor e tipo do dado (identidade)
alert(h != 6);
alert(h !== "6"); //diferente de valor e tipo do dado (identidade)
alert(h > 8); //pode ser feito com Strings
alert(h < 8);
alert(h >= 6);
alert(h <= 5);

//aula 11 - logicos
var i = 8;
alert((i>=1) && (i<=10));
alert((i>=1) || (i<=5));
alert(!(i>=1));

//aula 12 - atribuição
var j = 5;
    j+=3 //x = x+3;
    j-=3 //x = x-3;
    j/=3 //x = x/3;
    j*=3 //x = x*3;
    j%=3 //x = x%3;
alert(j);

//aula 13 - esoeciais
var idade = 12, sexo = "feminino", nacionalidade = "brasileira"; //,  - possibilita fazer varios ao mesmo tempo
var k = (idade >= 18 ) ? "Maior de idade" : "Menor de idade";
alert(k);

alert(sexo);
delete sexo; //Objetos também funciona
alert(sexo);

Pessoa = {
    nome: "Fulano"
}
alert("nome" in Pessoa);
alert("email" in Pessoa);

var ano = new Number(2020);
alert(ano instanceof Number);

alert(this.document.title);

function oi(){
    this //refere a função
}

alert(typeof(3)); //() - chama a função