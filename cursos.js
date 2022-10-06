
function cursos(nombre, duracion, profesora, modo, precio) {
    this.nombre = nombre;
    this.duracion = duracion;
    this.profesora = profesora;
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
