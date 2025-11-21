//Escribe una función en JavaScript que reciba un objeto y dos strings como parámetros.
//La función debe agregar una propiedad cuyo nombre sea el del segundo parámetro,
//y el valor de esa propiedad debe ser el del tercer parámetro

function agregarPropiedad(gato, nombrePropiedad,valorPropiedad){
    gato[nombrePropiedad] = valorPropiedad;
    return gato;
}
const gato = {
    habilidad: "saltar",
    habilidad2: "morder"
};
console.log(agregarPropiedad(gato,"habilidad3","arañar"));
