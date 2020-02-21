var submit = document.querySelector("#adicionar-paciente");
var form = document.querySelector("#form-add");

submit.addEventListener("click", function (event) {
    event.preventDefault();
    
    var paciente = obtemPaciente(form);  

    if (!validaPacienteForm(paciente,form))
        return;

    adicionaPacienteTabela(paciente);
    
    form.reset();
});

function obtemPaciente(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcimc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente){
    var pacienteTr = criaElemento("tr", "paciente");

    pacienteTr.classList.add("scale-transition");
    pacienteTr.appendChild(criaElemento("td", "info-nome", paciente.nome));
    pacienteTr.appendChild(criaElemento("td","info-peso", paciente.peso));
    pacienteTr.appendChild(criaElemento("td","info-altura", paciente.altura));
    pacienteTr.appendChild(criaElemento("td","info-gordura", paciente.gordura));
    pacienteTr.appendChild(criaElemento("td","info-imc", paciente.imc));

    return pacienteTr;
}

function criaElemento(elemento, classe, conteudo){
    var element = document.createElement(elemento);
    element.classList.add(classe);
    element.textContent = conteudo;

    return element;
}

function validaPacienteForm(paciente, form){
    if (!validaPeso(paciente.peso)){
        criaErroForm(".peso-group", form.peso, "erroPeso", "Peso inválido");
    } else{
        limpaErroForm(form.peso, "erroPeso");
    }
    
    if (!validaAltura(paciente.altura)){
        criaErroForm(".altura-group", form.altura, "erroAltura", "Altura inválida");
    } else {
        limpaErroForm(form.altura, "erroAltura");
    } 
    
    if (!validaGordura(paciente.gordura)){
        criaErroForm(".gordura-group", form.gordura, "erroGordura", "Gordura inválida");
    } else {
        limpaErroForm(form.gordura, "erroGordura");
    }

    if (validaPeso(paciente.peso) && validaAltura(paciente.altura) && validaGordura(paciente.gordura)) {
        return true;
    }

    return false;
}

function criaErroForm(grupo, input, classe, mensagem){
    var spanErro = document.querySelector("." + classe);
    if(spanErro !== null){
        return;
    }else{
        var grupoDiv = document.querySelector(grupo);
        input.classList.add("invalid");
        var error = criaElemento("span", classe, mensagem);
        error.classList.add("red-text", "text-darken-4");
        grupoDiv.appendChild(error);
    }
    
}

function limpaErroForm(input, classe){
    input.classList.remove("invalid");
    var spanErro = document.querySelector("."+classe);
    if (spanErro !== null) {
        spanErro.remove();
    }
    else{
        return;
    }
}

function adicionaPacienteTabela(paciente){
    var pacienteTr = montaTr(paciente);

    //Colocando Tr paciente na tabela de pacientes
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}