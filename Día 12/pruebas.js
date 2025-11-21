// write a js function that returns all the properties names of an Object
let edificio = {
    habitaciones: 3,
    cocina: 1,
    ascensor: "subir y bajar",
    baños: 3,
}
function propiedadesEdificio (edificio){
    return Object.keys(edificio);
}
console.log(propiedadesEdificio(edificio));

function valoresEdificio (edificio){
    return Object.values(edificio);
}
console.log(valoresEdificio(edificio));
