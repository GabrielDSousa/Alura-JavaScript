var tbody = document.querySelector("#tabela-pacientes");

/*
tbody.addEventListener("dblclick", function(event){        
    event.target.parentNode.remove();
});
*/

//Workarround for mobile dblclick event
var touchtime = 0;
tbody.addEventListener('click', function (event) {
    if (touchtime === 0) {
        touchtime = new Date().getTime();
    } else {
        if (((new Date().getTime()) - touchtime) < 800) {
            event.target.parentNode.classList.add("scale-out");
            setTimeout(function(){
                event.target.parentNode.remove();
            },200);            
            touchtime = 0;
        } else {
            touchtime = 0;
        }
    }
});