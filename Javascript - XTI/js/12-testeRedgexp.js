function validar(){
    var form = document.getElementById("form");
    var cpf = form.cpf;
    var email = form.email;

    var re_cpf = /^([\d][3])([\d][3])([\d][3])([\d][2])$/;
    var re_email = /^([\w] +(\.[\w-]+)*)@(([\w-]+\.)*\w[\w-](0,66)\.([a-z](2,6)(\.[a-z][2]))?)$/i;

    if(re_cpf.test(cpf.value)){
        alert("CPF VÁLIDO");
        cpf.value = cpf.value.replace(re_cpf, "$1.$2.$3-$4");
    } else {
        alert("CPF INVÁLIDO");
    }

    if(!re_email.test(email.value)){
        alert("Email INVÁLIDO");
    }
}