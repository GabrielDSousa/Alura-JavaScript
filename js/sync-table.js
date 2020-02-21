var btnSync = document.querySelector("#sync-table");

btnSync.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
        if(xhr.status === 200){
            clearFormError(btnSync, "errorSync");
            var xml = xhr.responseText;
            var patients = JSON.parse(xml);
            patients.forEach(p=> {
                console.log(p.nome);
                

                var patient = {
                    name: p.nome,
                    weight: p.peso,
                    height: p.altura,
                    fat: p.gordura,
                    bmi: calcBMI(p.peso, p.altura)
                }

                addPatientTable(patient);
            });
        }else{
            formError(".sync-group", btnSync, "errorSync", "Erro de sincronização: "+xhr.status);
        }

        
    });

    xhr.send();
});