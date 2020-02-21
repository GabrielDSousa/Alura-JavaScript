var search = document.querySelector("#search");

search.addEventListener("input", function () {
    console.log(search.value.length);
    var patients = document.querySelectorAll(".patient");
    var expression = new RegExp(this.value, "i");

    if (search.value.length > 0) {
        patients.forEach(patient => {
            if (expression.test(patient.querySelector(".info-name").textContent)) {
                patient.classList.remove("scale-out");
                patient.classList.add("scale-in");
                console.log(patient);
            } else {
                patient.classList.add("scale-out");
                patient.classList.remove("scale-in");
            }
        });
    } else {
        patients.forEach(patient => {
            patient.classList.remove("scale-out");
            patient.classList.add("scale-in");
        });

    }
});