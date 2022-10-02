

/* ----Registrarse---- */

/* localStorage.clear(); */

/* ---- datos de prueba ---*/
/* let usuarios =["usuario1", "usuario2", "usuario3", "usuario4"]; */
let contraseña = [123, 456, 789, 0123];


let pedirUsuario = prompt("Regístrese en nuestra página! \n Ingrese su usuario: "); 
console.log(pedirUsuario);
while (pedirUsuario == ""){
	pedirUsuario = prompt("Usted no ha ingresado un usuario válido. \n por favor, ingrese su usuario: "); 
}
let pedirUsuario1 = [pedirUsuario]
if ((pedirUsuario != "") || (pedirUsuario != "null")) {
    let usuarios = pedirUsuario1.concat(JSON.parse(localStorage.getItem("listaUsuarios")));
    /* console.log(usuarios);  */
    const guardarUsuarios = (clave, valor) => { localStorage.setItem(clave, valor) };
    guardarUsuarios("listaUsuarios", JSON.stringify(usuarios)) 

    /* console.log(usuarios.includes(pedirUsuario)); */

    while (usuarios.includes(pedirUsuario)){
        pedirUsuario = prompt("Usuario ya registrado. \n Ingrese otro usuario: ");	
    }
}
function limpiarUsuarios() {
	localStorage.removeItem("listaUsuarios")
};
/* limpiarUsuarios (); */
alert("Bienvenido/a " + pedirUsuario)



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
console.log("La edad promedio de las personas ingresadas es de: "+ Math.round(edadPromedio,2));  
/* console.log(edades); */
/* localStorage.clear(); */



let pedirPreferencias = parseInt(prompt("Ingrese las recetas que le gustarían ver: \n (1)Carnes  (2)Postres (3)Sopas y Guisos (4)Panificación (5)Sin TACC (6)Vegano y Vegetariano"));
while (pedirPreferencias > 6 || pedirPreferencias < 0){
	alert("Valor ingresado incorrecto");
	pedirPreferencias = prompt("Ingrese las recetas que le gustarían ver: \n (1)Carnes  (2)Postres (3)Sopas y Guisos (4)Panificación (5)Sin TACC (6)Vegano y Vegetariano");
}

pedirPreferencias = [pedirPreferencias]
let preferencias = pedirPreferencias.concat(JSON.parse(localStorage.getItem("listaPreferencia")));

const guardarPreferencias = (clave, valor) => { localStorage.setItem(clave, valor) };
guardarPreferencias("listaPreferencia", JSON.stringify(preferencias)) 

pref1 = 0;
pref2 = 0;
pref3 = 0;
pref4 = 0;
pref5 = 0;
pref6 = 0;


for (i = 0; i<preferencias.length; i++){
	switch(preferencias[i]){
		case 1:
			pref1 = pref1 + 1;
			break
		case 2:
			pref2 = pref2 + 1;
			break
		case 3:
			pref3 = pref3 + 1;
			break
		case 4:
			pref4 = pref4 + 1;
			break
		case 5:
			pref5 = pref5 + 1;
			break
		case 6:
			pref6 = pref6 + 1;
			break
}
}

cantidadPreferencias = 0;
for (let i = 0; i < preferencias.length; i++){
	if (typeof preferencias[i] == "number"){
		cantidadPreferencias = cantidadPreferencias +1;
	}
}
porcPref1 = (pref1/cantidadPreferencias)*100;
porcPref2 = (pref2/cantidadPreferencias)*100;
porcPref3 = (pref3/cantidadPreferencias)*100;
porcPref4 = (pref4/cantidadPreferencias)*100;
porcPref5 = (pref5/cantidadPreferencias)*100;
porcPref6 = (pref6/cantidadPreferencias)*100;



console.log("Las preferencias de recetas de los usuarios fueron: \n (1)Carnes: " +  Math.round(porcPref1,2) + " %"+ "\n (2)Postres: " +  Math.round(porcPref2,2) + " %"+ "\n (3)Sopas y Guisos: " +  Math.round(porcPref3,2) + " %"+"\n (4)Panificación: " + Math.round(porcPref4,2) + " %"+ "\n (5)Sin TACC: " + Math.round(porcPref5,2) + " %"+"\n (6)Vegano y Vegetariano): " + Math.round(porcPref6,2) + " %");

/* localStorage.removeItem("listaPreferencia"); */
/* localStorage.clear(); */

/* ---- Ingresar ---- */
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
