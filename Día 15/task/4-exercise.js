/*
Escriba un programa en JavaScript para encontrar el área de un triángulo donde tres lados son 5, 6, 7.

Este programa JavaScript calcula el área de un triángulo con lados de longitud 5, 6 y 7 usando la fórmula de Heron. 
Primero calcula el semiperímetro del triángulo y luego lo usa para hallar el área, que se registra en la consola
*/


function areaTriangulo (sideone,sideTwo,sidethree){
      let total = sideone+sideTwo+sidethree;
      let value = total/2;
      let result = Math.sqrt (value*(value-sideone)*(value-sideTwo)*(value-sidethree));
      return result;
}
console.log(areaTriangulo(5,6,7))
