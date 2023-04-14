function alternarExibicaoRegulamento(){
    var x = document.getElementById("sombra");
    var y = document.getElementById("imgCreditImg");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.src = "./logos/istock2.png";
    } else {
        x.style.display = "none";
        y.src = "./logos/istock.png";
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
            window.open('https://lucasloura.github.io/sim-school-pass/recadastro/', '_self');
        else 
            window.open('https://lucasloura.github.io/sim-school-pass/cadastro/', '_self');
    }
    else
        y.style.color = "red";
}