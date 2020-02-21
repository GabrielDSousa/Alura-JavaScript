var search = document.querySelector("#search");

search.addEventListener("input", function () {
    console.log(search.value.length);
    var pacientes = document.querySelectorAll(".paciente");
    var expressao = new RegExp(this.value, "i");

    if (search.value.length > 0) {
        pacientes.forEach(paciente => {
            if (expressao.test(paciente.querySelector(".info-nome").textContent)) {
                paciente.classList.remove("scale-out");
                paciente.classList.add("scale-in");
                console.log(paciente);
            } else {
                paciente.classList.add("scale-out");
                paciente.classList.remove("scale-in");
            }
        });
    } else {
        pacientes.forEach(paciente => {
            paciente.classList.remove("scale-out");
            paciente.classList.add("scale-in");
        });

    }
});''