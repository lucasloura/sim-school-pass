function alternarExibicaoRegulamento(){
    var x = document.getElementById("sombra");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function mascara(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
}

 function logarCPF(){
    var x = document.getElementById("txtCpf").value;
    var y = document.getElementById("cpfInvalido");

    y.style.color = "white";

    if(x.length == 14){
        localStorage.setItem('cpf', JSON.stringify(x));

        if (x == "000.000.000-00")
            window.open('./recadastro/index.html', '_self');
        else 
            window.open('./cadastro/index.html', '_self');
    }
    else
        y.style.color = "red";
}