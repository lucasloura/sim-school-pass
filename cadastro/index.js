function alternarExibicao(i){
    var x = document.getElementById("sombra");

    if (x.style.display === "none") {
        x.style.display = "block";
        
        if (i == 1)
            document.getElementById("areaSair").style.display = "block";

        if (i == 2)
            document.getElementById("areaRegulamento").style.display = "block";

        if (i == 3)
            document.getElementById("areaCamposIncompletos").style.display = "block";

        if (i == 4)
            document.getElementById("areaSucesso").style.display = "block";

    } else {
        x.style.display = "none";

        if (i == 1)
            document.getElementById("areaSair").style.display = "none";

        if (i == 2)
            document.getElementById("areaRegulamento").style.display = "none";

        if (i == 3)
            document.getElementById("areaCamposIncompletos").style.display = "none";

        if (i == 4)
            document.getElementById("areaSucesso").style.display = "none";
    }
}

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
        alternarExibicao(4);
    else{
        alternarExibicao(3);
        s.forEach(campo => {
            document.getElementById("campos").innerHTML += " &#9679; &nbsp; " + campo + " <br>";
        });
    }
}

function verifEmail(){

    if(!isEmail(document.getElementById("txtEmail").value))
        document.getElementById("invEmail").style.color = "red";
    else 
        document.getElementById("invEmail").style.color = "white";
}

function verifCpf(i){

    if (i.value.length < 14)
        document.getElementById("invCpf").style.color = "red";
    else
        document.getElementById("invCpf").style.color = "white";
}

function verifRg(i){
    
    if (i.value.length < 12)
        document.getElementById("invRg").style.color = "red";
    else
        document.getElementById("invRg").style.color = "white";
}

function verifData(i){

    if (i.value.length < 10)
        document.getElementById("invDataNasc").style.color = "red";
    else
        document.getElementById("invDataNasc").style.color = "white";
}

function verifNumCel(i){
    
    if (i.value.length < 15)
        document.getElementById("invNumCel").style.color = "red";
    else
        document.getElementById("invNumCel").style.color = "white";
}

function verifCep(i){
        
    if (i.value.length < 9)
        document.getElementById("invCep").style.color = "red";
    else
        document.getElementById("invCep").style.color = "white";
}

function verifCepInst(i){
        
    if (i.value.length < 9)
        document.getElementById("invCepInst").style.color = "red";
    else
        document.getElementById("invCepInst").style.color = "white";
}

function isEmail(emailAdress){
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (emailAdress.match(regex)) 
        return true; 
    else
        return false; 
}

function sair(){
    window.open('../index.html', '_self');
}