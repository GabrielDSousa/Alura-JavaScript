var patients = document.querySelectorAll(".patient");

patients.forEach(patient => {
    var tdBMI = patient.querySelector(".info-bmi");
    var tdWeight = patient.querySelector(".info-weight");
    var tdHeight = patient.querySelector(".info-height");
    var tdFat = patient.querySelector(".info-fat");
    
    var weight = tdWeight.textContent;   
    var height = tdHeight.textContent;
    var fat = tdFat.textContent;
    
    if(!validateWeight(weight)){
        registerError(patient, tdWeight);
    }
    
    if(!validateHeight(height)){
        registerError(patient, tdHeight);
    }

    if (!validateFat(fat)) {
        registerError(patient, tdFat);
    }

    if (validateWeight(weight) && validateHeight(height)){
        tdBMI.textContent = calcBMI(weight, height);
    }else{
        tdBMI.textContent = "Error";
    }    
     
});

function calcBMI(weight,height){
    var BMI = 0;    
    BMI = weight/(height*height);    
    return BMI.toFixed(2);
}

function validateWeight(weight) {
    if (weight <= 0 || weight > 599.7) {
        return false;
    }
    return true;
}

function validateHeight(height){
    if (height <= 0 || height > 2.72) {
        
        return false;
    }
    return true;
}


function validateFat(fat) {
    if (fat <= 0 || fat >= 100) {

        return false;
    }
    return true;
}

function registerError(patient, tdError){
    patient.classList.add("red", "lighten-3");
    tdError.classList.add("red-text", "text-darken-4");
}

