/*JS para suma de precios de cursos*/ 
function cursos(nombre, duracion, profesor, modo, precio) {
    this.nombre = nombre;
    this.duracion = duracion;
    this.profesor = profesor;
    this.modo = modo;
    this.precio = precio;
}
/*
duración en hs
precio en pesos argentinos
*/
let batchcooking = new cursos("Batchcooking", 3, "María Pérez", "presencial", 2000);
let masaMadre = new cursos("Masa Madre", 4, "Sol López", "presencial", 2500);
let pastasCaseras = new cursos("Pastas Caseras", 2, "Nicolás García", "online", 1500);
let quesosYYogures = new cursos("Quesos y Yogures", 6, "Paula López", "presencial", 4500);


let inscripSioNo = prompt("Desea inscribirse en un curso? ");
inscripSioNo= inscripSioNo.toLowerCase();
console.log(inscripSioNo);
let inscripcion = 0;
console.log(inscripcion);
sumaPrecios = 0; 
while((inscripSioNo === "si") || (inscripSioNo === "s")){
    inscripcion = parseInt(prompt("Los cursos disponibles son: \n (1)Batchcooking \n (2)Masa madre \n (3)Pastas caseras \n (4)Quesos y yogures \n Ingrese el curso elegido: "))
    console.log(inscripcion);
    switch(inscripcion){
        case 1:
            sumaPrecios = sumaPrecios + batchcooking.precio;
            break;
        case 2:
            sumaPrecios = sumaPrecios + masaMadre.precio;
            break;
        case 3:
            sumaPrecios = sumaPrecios + pastasCaseras.precio;
            break;
        case 4:
            sumaPrecios = sumaPrecios + quesosYYogures.precio;
            break;
        default:
            alert("Usted no ha ingresado un valor correcto")
            break;
    }   
    inscripSioNo = prompt("Desea inscribirse en otro curso?") 
    console.log(inscripSioNo);
};
console.log(sumaPrecios); 
alert("La suma de sus compras es de: " + sumaPrecios)
/* if ((inscripSioNo = "si") || (inscripSioNo = "S")){
    let inscripcion = prompt("Los cursos disponibles son: \n (1)Batchcooking \n (2)Masa madre \n (3)Pastas caseras \n (4) Quesos y yogures \n Ingrese el curso elegido: ")
    let inscripOtro = prompt("Desea inscribirse en otro curso?")
}else prompt("Esperamos que disfrute de nuestro coontenido"); */

