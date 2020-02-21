var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(paciente => {
    var tdImc = paciente.querySelector(".info-imc");

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdGordura = paciente.querySelector(".info-gordura");
    
    var peso = tdPeso.textContent;   
    var altura = tdAltura.textContent;
    var gordura = tdGordura.textContent;
    
    if(!validaPeso(peso)){
        erroDeRegistro(paciente, tdPeso);
    }
    
    if(!validaAltura(altura)){
        erroDeRegistro(paciente, tdAltura);
    }

    if (!validaGordura(gordura)) {
        erroDeRegistro(paciente, tdGordura);
    }

    if (validaPeso(peso) && validaAltura(altura)){
        tdImc.textContent = calcimc(peso, altura);
    }else{
        tdImc.textContent = "Erro";
    }    
     
});

function calcimc(peso,altura){
    var imc = 0;    
    imc = peso/(altura*altura);    
    return imc.toFixed(2);
}

function validaPeso(peso) {
    if (peso <= 0 || peso > 599.7) {
        return false;
    }
    return true;
}

function validaAltura(altura){
    if (altura <= 0 || altura > 2.72) {
        
        return false;
    }
    return true;
}


function validaGordura(gordura) {
    if (gordura <= 0 || gordura >= 100) {

        return false;
    }
    return true;
}

function erroDeRegistro(paciente, tdErro){
    paciente.classList.add("red", "lighten-3");
    tdErro.classList.add("red-text", "text-darken-4");
}

