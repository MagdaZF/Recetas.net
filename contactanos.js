/*Capturar una o más entradas por prompt() y mostrarlas en el
HTML, modificando el DOM*/
let pedirNombre = prompt("Por favor, ingrese su nombre: ")
let pNombre = document.getElementById('nombre1');
pNombre.innerHTML = pedirNombre;
