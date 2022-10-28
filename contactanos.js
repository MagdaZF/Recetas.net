/*Capturar una o más entradas por prompt() y mostrarlas en el
HTML, modificando el DOM*/
/* let pedirNombre = prompt("Por favor, ingrese su nombre: ") */

/* pNombre.innerHTML = pedirNombre; */

function captura(){
    nombreComen = 0;
    var nombreComen = document.getElementById("nombre").value;
    alert("Gracias por enviar su comentario "+nombreComen+", será respondido a la brevedad");
}

