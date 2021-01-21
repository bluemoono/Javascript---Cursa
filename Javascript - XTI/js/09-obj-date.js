var dias = ["domingo", "segunda", "terça", "querta", "quinta", "sexta", "sábado"];
var meses = ["jeneiro","fevereivo","março","abriu","maio","junho","julho", "agosto","setembro", "outubro", "novembro", "dezembro"];

var data = new Date();
alert(data.getHours());//para horas
alert(data.getUTCHours());

alert(data.getDay()); //dia da semana
alert(dias[data.getDay()]); //dia da semana
alert(data.getDate()); //dia do mes
alert(data.getFullYear()); //ano om 4 digitos
alert(data.getMilliseconds()); //miliegundos da data
alert(data.getMinutes()); //minutos da data
alert(data.getMonth()); //mes da data
alert(meses[data.getMonth()]); //mes da data
alert(data.getSeconds()); //segundos da data
alert(data.getTime()); //segundos da data
alert(data.getTimezoneOffset()); //segundos da data
alert(Date.parse(data))//devolve os milisengundosa

alert(data.setFullYear(2020));//mudando a data
alert(data.setDate(20));//mudando o dia
alert(data.setMonth(08));//mudando o dia
alert(data);

alert(data.toLocaleDateString());// ara strins de um local