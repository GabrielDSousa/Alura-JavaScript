var submit = document.querySelector("#add-patient");
var form = document.querySelector("#form-add");

submit.addEventListener("click", function (event) {
    event.preventDefault();
    
    var patient = getPatient(form);  

    if (!validatePatientForm(patient,form))
        return;

    addPatientTable(patient);
    
    form.reset();
});

function getPatient(form){
    var patient = {
        name: form.name.value,
        weight: form.weight.value,
        height: form.height.value,
        fat: form.fat.value,
        bmi: calcBMI(form.weight.value, form.height.value)
    }

    return patient;
}

function mountTr(patient){
    var patientTr = mountElement("tr", "patient");

    patientTr.classList.add("scale-transition");
    patientTr.appendChild(mountElement("td", "info-name", patient.name));
    patientTr.appendChild(mountElement("td", "info-weight", patient.weight));
    patientTr.appendChild(mountElement("td","info-height", patient.height));
    patientTr.appendChild(mountElement("td","info-fat", patient.fat));
    patientTr.appendChild(mountElement("td","info-bmi", patient.bmi));

    return patientTr;
}

function mountElement(element, elementClass, content){
    var e = document.createElement(element);
    e.classList.add(elementClass);
    e.textContent = content;

    return e;
}

function validatePatientForm(patient, form){
    if (!validateWeight(patient.weight)){
        formError(".weight-group", form.weight, "errorWeight", "invalid");
    } else{
        clearFormError(form.weight, "errorWeight");
    }
    
    if (!validateHeight(patient.height)){
        formError(".height-group", form.height, "errorHeight", "invalid");
    } else {
        clearFormError(form.height, "errorHeight");
    } 
    
    if (!validateFat(patient.fat)){
        formError(".fat-group", form.fat, "errorFat", "invalid");
    } else {
        clearFormError(form.fat, "errorFat");
    }

    if (validateWeight(patient.weight) && validateHeight(patient.height) && validateFat(patient.fat)) {
        return true;
    }

    return false;
}

function formError(group, input, errorClass, message){
    var spanError = document.querySelector("." + errorClass);
    if(spanError !== null){
        return;
    }else{
        var groupDiv = document.querySelector(group);
        input.classList.add("invalid");
        var error = mountElement("span", errorClass, message);
        error.classList.add("red-text", "text-darken-4");
        groupDiv.appendChild(error);
    }
    
}

function clearFormError(input, errorClass){
    input.classList.remove("invalid");
    var spanError = document.querySelector("." + errorClass);
    if (spanError !== null) {
        spanError.remove();
    }
    else{
        return;
    }
}

function addPatientTable(patient){
    var patientTr = mountTr(patient);
    var table = document.querySelector("#patients-table");
    table.appendChild(patientTr);
}