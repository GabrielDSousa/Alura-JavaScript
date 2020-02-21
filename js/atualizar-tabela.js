var btnAtualiza = document.querySelector("#atualizar-tabela");

btnAtualiza.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
        if(xhr.status === 200){
            limpaErroForm(btnAtualiza, "erroAtualiza");
            var xml = xhr.responseText;
            var pacientes = JSON.parse(xml);
            pacientes.forEach(paciente => {
                adicionaPacienteTabela(paciente);
            });
        }else{
            criaErroForm(".atualiza-group", btnAtualiza, "erroAtualiza", "Erro de sincronização: "+xhr.status);
        }

        
    });

    xhr.send();
});