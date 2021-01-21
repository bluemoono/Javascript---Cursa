window.onload = alterarPoltronas();

//true = disponivel , false = indisponivel
var poltronas = [false, true, false, true, true, true, false, true, false];

function alterarPoltronas(){
    var imagens = document.getElementsByTagName("img");
    for(var  i=0; i<imagens.length; i++){
        if(poltronas[i]){
            imagens[i].src="./img/03.jpg";
        } else {
            imagens[i].src="./img/04.jpg";
        }
    }
}

function selecionarPoltrona(){
    var imagens = document.getElementsByTagName("img");
    for(var i = 0 ; i<poltronas; i++){
        if(poltronas[i]){
            imagens[i].src = "./img/05.jpg";

            var deseja = confirm("Deja este lugar?")
            if(deseja){
                break;
            } else {
                imagens[i].src = "./img/03.jpg";

            }
        }
    }
}

function selecionarCasais(){
    var imagens = document.getElementsByTagName("img");
    for(var i = 0 ; i<poltronas; i++){
        if(poltronas[i] && poltronas[i+1]){
            imagens[i].src = "./img/05.jpg";
            imagens[i+1].src = "./img/05.jpg";

            var deseja = confirm("Deja estes lugares?")
            if(deseja){
                break;
            } else {
                imagens[i].src = "./img/03.jpg";
                imagens[i+1].src = "./img/03.jpg";

            }
        }
    }
}