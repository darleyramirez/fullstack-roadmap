 // write a js function that receives an object and a string as parameters
 // the function should remove the property that has the name of the string parameter
 // from the object and retu

const persona = {
    edad: 24,
    colorDePiel: "moreno",
    estadoCivil: "soltero",
    comidaFavorita: "pizza"
};
function eliminarPropiedades(persona,propiedadColorDePiel,propiedadEstadoCivil){
    delete persona[propiedadColorDePiel];
    delete persona[propiedadEstadoCivil];
    return persona;
}
console.log(eliminarPropiedades(persona,"colorDePiel","estadoCivil"))
