var regex = new RegExp("JavaScript");//coloca a palavra pra encontrar
var regex = /"JavaScript"/i;//sensivel a escrita
var string = "JavaScript";
alert(regex.test(string));

alert(/javascript/i.test("JavaScript"));

var st= "o doce mais doce que o doce";
alert(/doce/i.exec(st));//primeira ocorrencia
alert(st.match());

//METACARACTERES
alert(/./.test("Piew13"));
alert(/\w/.test("Piew13"));
alert(/\s/.test("Piew13"));//espaço
alert(/\d/.test("Piew13"));//numeros
alert(/^13/.test("Piew13"));//inicio
alert(/13$/.test("Piew13"));//final
alert(/\d\d\d\d\d - \d\d\d$/.test("98378-789"));//cep

//QUANTIFICADORES
alert(/\d*/.test("Piew13"));//final
alert(/\d(3)/.test("Piew13"));//final
alert(/\d(2)$/.test("Piew13"));//final

//OPCIONAIS
alert(/c[ae]u/.test("ceu"));
alert(st.match(/doce/ig));
alert(st.replace(/doce/ig, "amargo"));


