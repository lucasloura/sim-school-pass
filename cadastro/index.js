function mascaraCpf(i){
    var v = i.value;
    
    if(isNaN(v[v.length-1])){
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
}

function mascaraRg(i){
    var v = i.value;
    
    if(isNaN(v[v.length-1])){
        i.value = v.substring(0, v.length-1);
        return;
     }

    i.setAttribute("maxlength", "12");
    if (v.length == 2 || v.length == 6) i.value += ".";
    if (v.length == 10) i.value += "-";
}

function mascaraData(i){
    var v = i.value;
    
    if(isNaN(v[v.length-1])){
        i.value = v.substring(0, v.length-1);
        return;
     }

    i.setAttribute("maxlength", "10");
    if (v.length == 2 || v.length == 5) i.value += "/";
}

function mascaraData(i){
    var v = i.value;
    
    if(isNaN(v[v.length-1])){
        i.value = v.substring(0, v.length-1);
        return;
     }

    i.setAttribute("maxlength", "10");
    if (v.length == 2 || v.length == 5) i.value += "/";
}

function mascaraNumCel(i){
    var v = i.value;
    
    if(isNaN(v[v.length-1])){
        i.value = v.substring(0, v.length-1);
        return;
     }

    i.setAttribute("maxlength", "15");
    if (v.length == 1) i.value = "(";
    if (v.length == 3) i.value += ") ";
    if (v.length == 10) i.value += "-";
}

function mascaraCep(i){
    var v = i.value;
    
    if(isNaN(v[v.length-1])){
        i.value = v.substring(0, v.length-1);
        return;
    }

    i.setAttribute("maxlength", "9");
    if (v.length == 5) i.value += "-";
}

function mascaraNum(i){
    var v = i.value;

    if(isNaN(v[v.length-1])){
        i.value = v.substring(0, v.length-1);
        return;
    }
}

function mascaraLinOnib(i){
    var v = i.value;

    if (v.length == 1 || v.length == 2 || v.length == 3){
        if(isNaN(v[v.length-1])){
            i.value = v.substring(0, v.length-1);
            return;
        }
    }

    if(v.length == 3) i.value += " - ";
    if(v.length == 5) i.value = "";
}

function checarCadastro(){
    var s = [];

    var x = document.getElementById("docFoto").value;
    if(x == null || x == "") s.push('Documento com Foto');

    var x = document.getElementById("txtNome").value;
    if(x == null || x == "") s.push('Nome do(a) Estudante');

    var x = document.getElementById("txtNomeMae").value;
    if(x == null || x == "") s.push('Nome da Mãe');

    var x = document.getElementById("txtEmail").value;
    if(x == null || x == "") s.push('Email');

    var x = document.getElementById("txtCpf").value;
    if(x == null || x == "") s.push('CPF');

    var x = document.getElementById("txtRg").value;
    if(x == null || x == "") s.push('RG');

    var x = document.getElementById("txtDataNasc").value;
    if(x == null || x == "") s.push('Data de Nascimento');

    var x = document.getElementById("txtNumCel").value;
    if(x == null || x == "") s.push('Nº Celular');

    if(document.getElementById("rdMasc").checked == false &&
       document.getElementById("rdFemin").checked == false &&
       document.getElementById("rdOutro").checked == false)
        s.push('Sexo');

    var x = document.getElementById("compRes").value;
    if(x == null || x == "") s.push('Comprovante de Residência');

    var x = document.getElementById("txtCep").value;
    if(x == null || x == "") s.push('CEP');

    var x = document.getElementById("txtEndereco").value;
    if(x == null || x == "") s.push('Endereço');

    var x = document.getElementById("txtBairro").value;
    if(x == null || x == "") s.push('Bairro');

    var x = document.getElementById("txtCidade").value;
    if(x == null || x == "") s.push('Cidade');

    var x = document.getElementById("txtUf").value;
    if(x == null || x == "") s.push('UF');

    var x = document.getElementById("txtNum").value;
    if(x == null || x == "") s.push('Número');

    var x = document.getElementById("txtComp").value;
    if(x == null || x == "") s.push('Complemento');

    var x = document.getElementById("atesMatr").value;
    if(x == null || x == "") s.push('Atestado de Matrícula');

    var x = document.getElementById("txtNomeInst").value;
    if(x == null || x == "") s.push('Nome da Instituição');

    var x = document.getElementById("txtCepInst").value;
    if(x == null || x == "") s.push('CEP (Instituição)');

    var x = document.getElementById("txtEnderecoInst").value;
    if(x == null || x == "") s.push('Endereço (Instituição)');

    var x = document.getElementById("txtBairroInst").value;
    if(x == null || x == "") s.push('Bairro (Instituição)');

    var x = document.getElementById("txtCidadeInst").value;
    if(x == null || x == "") s.push('Cidade (Instituição)');

    var x = document.getElementById("txtUfInst").value;
    if(x == null || x == "") s.push('UF (Instituição)');

    var x = document.getElementById("txtNumInst").value;
    if(x == null || x == "") s.push('Número (Instituição)');

    var x = document.getElementById("txtCompInst").value;
    if(x == null || x == "") s.push('Complemento (Instituição)');

    var x = document.getElementById("txtCompInst").value;
    if(x == null || x == "") s.push('Complemento (Instituição)');

    if((document.getElementById("txtLinOnib1").value == null || document.getElementById("txtLinOnib1").value == "")  &&
       (document.getElementById("txtLinOnib1").value == null || document.getElementById("txtLinOnib2").value == "")  &&
       (document.getElementById("txtLinOnib1").value == null || document.getElementById("txtLinOnib3").value == ""))
        s.push('Linha de ônibus Utilizada');

    var x = document.getElementById("termosAceitos").checked;
    if(!x) s.push('Termos de Uso');

    if (s.length == 0)
        alternarExibicaoCadastroRealizado();
    else{
        alternarExibicaoCamposIncompletos();
        s.forEach(campo => {
            document.getElementById("campos").innerHTML += " &#9679; &nbsp; " + campo + " <br>";
        });
    }
}

function alternarExibicaoSair(){
    var x = document.getElementById("sombra1");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function alternarExibicaoRegulamento(){
    var x = document.getElementById("sombra2");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function alternarExibicaoCamposIncompletos(){
    var x = document.getElementById("sombra3");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function alternarExibicaoCadastroRealizado(){
    var x = document.getElementById("sombra4");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function sair(){
    window.open('https://lucasloura.github.io/sim-school-pass/', '_self');
}