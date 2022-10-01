

/* ----Registrarse---- */
let usuarios =["usuario1", "usuario2", "usuario3", "usuario4"];
let contraseña = [123, 456, 789, 0123];
let pedirUsuario = prompt("Regístrese en nuestra página! \n Ingrese su usuario: ");

console.log(usuarios);

while (usuarios.includes(pedirUsuario)){
	pedirUsuario = prompt("Usuario ya registrado. \n Ingrese otro usuario: ");	
}
usuarios.push(pedirUsuario);

let pedirContraseña = prompt("Ingrese su contraseña: ");
let pedirContraseña2 = prompt("Ingrese su contraseña nuevamente: ");
while (pedirContraseña != pedirContraseña2){
	alert("Las contraseñas no coinciden. Vuelva a ingresarlas")
	pedirContraseña = prompt("Ingrese su contraseña: ");
	pedirContraseña2 = prompt("Ingrese su contraseña nuevamente: ");
}
contraseña.push(pedirContraseña);


let pedirEdad = parseInt(prompt("Ingrese su edad: "));

while (typeof pedirEdad != "number" || pedirEdad > 120 || pedirEdad < 8) {
	alert("Edad ingresada incorrecta");
	pedirEdad = parseInt(prompt("Ingrese su edad: "));
}
pedirEdad = [pedirEdad]
let edades = pedirEdad.concat(JSON.parse(localStorage.getItem("listaEdades")));

const guardarEdad = (clave, valor) => { localStorage.setItem(clave, valor) };
guardarEdad("listaEdades", JSON.stringify(edades))
let sumaEdades = 0;
for (let i = 0; i < edades.length; i++) {
    sumaEdades += edades[i];
}
cantidadEdades = 0;
for (let i = 0; i < edades.length; i++){
	if (typeof edades[i] == "number"){
		cantidadEdades = cantidadEdades +1;
	}
}
/* console.log(cantidadEdades); */
let edadPromedio = sumaEdades/(cantidadEdades);
console.log("La edad promedio de las personas ingresadas es de: "+ edadPromedio); 
console.log(edades);
/* localStorage.clear(); */



/* let pedirPreferencias = prompt("Ingrese las recetas que le gustarían ver: \n (1)Carnes  (2)Postres (3)Sopas y Guisos (4)Panificación (5)Sin TACC (6)Vegano y Vegetariano");
while (pedirPreferencias > 6 || pedirPreferencias < 0){
	alert("Valor ingresado incorrecto");
	pedirPreferencias = prompt("Ingrese las recetas que le gustarían ver: \n (1)Carnes  (2)Postres (3)Sopas y Guisos (4)Panificación (5)Sin TACC (6)Vegano y Vegetariano");
}
let preferencias = []
preferencias = [localStorage.getItem("pref")];

/* preferencias.push(pedirPreferencias) */

/*localStorage.setItem("pref", toString(pedirPreferencias));
let preferencia1 = preferencias.filter(elemento => elemento == 1);
porcPref1 = preferencia1.length/preferencias.length;
let preferencia2 = preferencias.filter(elemento => elemento == 2);
porcPref2 = preferencia2.length/preferencias.length;
let preferencia3 = preferencias.filter(elemento => elemento == 3);
porcPref3 = preferencia3.length/preferencias.length;
let preferencia4 = preferencias.filter(elemento => elemento == 4);
porcPref4 = preferencia4.length/preferencias.length;
let preferencia5 = preferencias.filter(elemento => elemento == 5);
porcPref5 = preferencia5.length/preferencias.length;
let preferencia6 = preferencias.filter(elemento => elemento == 6);
porcPref6 = preferencia6.length/preferencias.length;




console.log("Las preferencias de recetas de los usuarios fueron: \n (1)Carnes: " + porcPref1 + "\n (2)Postres: " + porcPref2 + "\n (3)Sopas y Guisos: " + porcPref3 +"\n (4)Panificación: " +porcPref4 + "\n (5)Sin TACC: " +porcPref5 +"\n (6)Vegano y Vegetariano): " +porcPref6);
 */




/* class Usuario {
	constructor(usuario, contraseña, edad, preferencias){
		this.usuario = usuario;
		this.contraseña = contraseña;
		this.edad = edad;
		this.preferencias = preferencias
	}
}
var newUsuario = new Usuario (pedirUsuario, pedirContraseña, pedirEdad, pedirPreferencias) */

/* if ((newUsuario[usuario].includes(pedirUsuario)) && (newUsuario[contraseña.includes(pedirContraseña)])){
	alert("Usted ha ingresado con éxito")
}else{
	alert("Usted NO ha ingresado con éxito. Vuelva a intentarlo")
} */




/* ---- menu hamburguesa ---- */
// selector
var menu = document.querySelector('.hamburger');

// metodo
function toggleMenu (event) {
	this.classList.toggle('is-active');
	document.querySelector( ".menuppal" ).classList.toggle("is_active");
	event.preventDefault();
}

// evento
menu.addEventListener('click', toggleMenu, false);
