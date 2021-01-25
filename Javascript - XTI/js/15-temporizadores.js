window.onload = function(){
    document.getElementById("lampada").onclick = ligar;
    setInterval(apresentarHoras, 1000);

    //AULA 16 - COOKIE
    document.cookie="nome=valor; expires=data; path=/";
}

function ligar(){
    document.getElementById("lampada").src="img/02.jpg";
    setTimeout(desligar, 3000);
}

function desligar(){
    document.getElementById("lampada").src="img/01.png";
}

function apresentarHoras(){
    var agora = new Date();
    var horas = agora.getHours() + ":" + agora.getMinutes()":" + agora.getSeconds();
    document.getElementById("horas").innerHTML = horas;
}