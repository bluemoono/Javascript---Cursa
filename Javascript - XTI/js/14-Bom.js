//browser Object Model

window.onload = function(){
    alert();//alerta
    confirm();//janela de confirmação
    prompt();//obter dado do user
    open();//abre uma janela com algumas propriedades
    window.resizeTo();//redimencioana a janela;
    window.moveTo();//move a janela;

    document.getElementById()
    
    alert(navigator.platform);
    alert(navigator.userAgent);
    alert(navigator.language);

    var plugin = navigator.plugins;
    var p ="";
    for(var i=0; i<plugin.length; i++){
        p+=plugin[i].name+ "\n";
    }
    alert(p);

    alert(location.href);
    alert(location.protocol);

    alert(screen.width);
    alert(screen.height);

    alert(history.go(2));
}