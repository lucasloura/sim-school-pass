function alternarExibicao(i){
    var x = document.getElementById("sombra");

    if (x.style.display === "none") {
        x.style.display = "block";
        
        if (i == 1)
            document.getElementById("areaIntro").style.display = "block";

        if (i == 2)
            document.getElementById("areaSair").style.display = "block";

        if (i == 3)
            document.getElementById("areaRegulamento").style.display = "block";

        if (i == 4)
            document.getElementById("areaCamposIncompletos").style.display = "block";

        if (i == 5)
            document.getElementById("areaSucesso").style.display = "block";

    } else {
        x.style.display = "none";

        if (i == 1)
            document.getElementById("areaIntro").style.display = "none";

        if (i == 2)
            document.getElementById("areaSair").style.display = "none";

        if (i == 3)
            document.getElementById("areaRegulamento").style.display = "none";

        if (i == 4)
            document.getElementById("areaCamposIncompletos").style.display = "none";

        if (i == 5)
            document.getElementById("areaSucesso").style.display = "none";
    }
}

function mascaraNumCartao(i){
    var v = i.value;
    
    if(isNaN(v[v.length-1])){
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "16");
    if (v.length == 2 || v.length == 5) i.value += ".";
    if (v.length == 14) i.value += "-";
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

function mascaraUf(i){
    var v = i.value;

    if(!isNaN(v[v.length-1])){
        i.value = v.substring(0, v.length-1);
        return;
    }
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
    var x;

    x = document.getElementById("docFoto").value;
    if(x == null || x == "") s.push('Documento com Foto');

    x = document.getElementById("verCartao").value;
    if(x == null || x == "") s.push('Verso do Cartão Escolar');

    x = document.getElementById("txtNumCartao").value;
    if(x == null || x == "") s.push('N° Cartão');

    x = document.getElementById("txtNome").value;
    if(x == null || x == "") s.push('Nome do(a) Estudante');

    x = document.getElementById("txtNomeMae").value;
    if(x == null || x == "") s.push('Nome da Mãe');

    x = document.getElementById("txtEmail").value;
    if(x == null || x == "") s.push('Email');

    x = document.getElementById("txtCpf").value;
    if(x == null || x == "") s.push('CPF');

    x = document.getElementById("txtRg").value;
    if(x == null || x == "") s.push('RG');

    x = document.getElementById("txtDataNasc").value;
    if(x == null || x == "") s.push('Data de Nascimento');

    x = document.getElementById("txtNumCel").value;
    if(x == null || x == "") s.push('Nº Celular');

    if(document.getElementById("rdMasc").checked == false &&
       document.getElementById("rdFemin").checked == false &&
       document.getElementById("rdOutro").checked == false)
        s.push('Sexo');

    x = document.getElementById("compRes").value;
    if(x == null || x == "") s.push('Comprovante de Residência');

    x = document.getElementById("txtCep").value;
    if(x == null || x == "") s.push('CEP');

    x = document.getElementById("txtEndereco").value;
    if(x == null || x == "") s.push('Endereço');

    x = document.getElementById("txtBairro").value;
    if(x == null || x == "") s.push('Bairro');

    x = document.getElementById("txtCidade").value;
    if(x == null || x == "") s.push('Cidade');

    x = document.getElementById("txtUf").value;
    if(x == null || x == "") s.push('UF');

    x = document.getElementById("txtNum").value;
    if(x == null || x == "") s.push('Número');

    x = document.getElementById("txtComp").value;
    if(x == null || x == "") s.push('Complemento');

    x = document.getElementById("atesMatr").value;
    if(x == null || x == "") s.push('Atestado de Matrícula');

    x = document.getElementById("txtNomeInst").value;
    if(x == null || x == "") s.push('Nome da Instituição');

    x = document.getElementById("txtCepInst").value;
    if(x == null || x == "") s.push('CEP (Instituição)');

    x = document.getElementById("txtEnderecoInst").value;
    if(x == null || x == "") s.push('Endereço (Instituição)');

    x = document.getElementById("txtBairroInst").value;
    if(x == null || x == "") s.push('Bairro (Instituição)');

    x = document.getElementById("txtCidadeInst").value;
    if(x == null || x == "") s.push('Cidade (Instituição)');

    x = document.getElementById("txtUfInst").value;
    if(x == null || x == "") s.push('UF (Instituição)');

    x = document.getElementById("txtNumInst").value;
    if(x == null || x == "") s.push('Número (Instituição)');

    x = document.getElementById("txtCompInst").value;
    if(x == null || x == "") s.push('Complemento (Instituição)');

    if((document.getElementById("txtLinOnib1").value == null || document.getElementById("txtLinOnib1").value == "")  &&
       (document.getElementById("txtLinOnib2").value == null || document.getElementById("txtLinOnib2").value == "")  &&
       (document.getElementById("txtLinOnib3").value == null || document.getElementById("txtLinOnib3").value == ""))
        s.push('Linha de ônibus Utilizada');

    x = document.getElementById("termosAceitos").checked;
    if(!x) s.push('Termos de Uso');

    if (s.length == 0)
        alternarExibicao(5);
    else{
        alternarExibicao(4);
        s.forEach(campo => {
            document.getElementById("campos").innerHTML += " &#9679; &nbsp; " + campo + " <br>";
        });
    }
}

function verifNumCartao(i){

    if (i.value.length < 16)
        document.getElementById("invNumCartao").style.color = "red";
    else
        document.getElementById("invNumCartao").style.color = "white";
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

function autoPreencher(){
    document.getElementById("txtNumCartao").value = "33.44.55555555-6";
    verifNumCartao(document.getElementById("txtNumCartao"));

    document.getElementById("txtNome").value = "Lucas Loura";

    document.getElementById("txtNomeMae").value = "Mãe Loura";

    document.getElementById("txtNomePai").value = "Pai Loura";

    document.getElementById("txtEmail").value = "lucasloura@fatec.com";
    verifEmail();

    document.getElementById("txtCpf").value = "111.222.333-44";
    verifCep(document.getElementById("txtCpf"));
    
    document.getElementById("txtRg").value = "44.555.666-7";
    verifRg(document.getElementById("txtRg"));

    document.getElementById("txtDataNasc").value = "26/11/2003";
    verifData(document.getElementById("txtDataNasc"));

    document.getElementById("txtNumCel").value = "(77) 98888-9999";
    verifNumCel(document.getElementById("txtNumCel"));

    document.getElementById("rdMasc").checked = true;

    document.getElementById("txtCep").value = "11111-222";
    verifCep(document.getElementById("txtCep"));

    document.getElementById("txtEndereco").value = "Endereço do Lucas Loura";

    document.getElementById("txtBairro").value = "Bairro do Lucas Loura";

    document.getElementById("txtCidade").value = "Mauá";

    document.getElementById("txtUf").value = "SP";

    document.getElementById("txtNum").value = "33";

    document.getElementById("txtComp").value = "A";

    document.getElementById("txtNomeInst").value = "Fatec São Caetano do Sul - Antônio Russo";

    document.getElementById("txtCepInst").value = "44444-555";
    verifCep(document.getElementById("txtCepInst"));

    document.getElementById("txtEnderecoInst").value = "Endereço da Fatec";

    document.getElementById("txtBairroInst").value = "Bairro da Fatec";

    document.getElementById("txtCidadeInst").value = "São Caetano do Sul";

    document.getElementById("txtUfInst").value = "SP";

    document.getElementById("txtNumInst").value = "66";

    document.getElementById("txtCompInst").value = "B";

    document.getElementById("txtLinOnib1").value = "077 - Ônibus Principal";  

    document.getElementById("txtLinOnib2").value = "088 - Ônibus Secundário"; 

    x = document.getElementById("termosAceitos").checked = true;
}