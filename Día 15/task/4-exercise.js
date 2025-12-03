/*
Escriba un programa en JavaScript para encontrar el área de un triángulo donde tres lados son 5, 6, 7.

Este programa JavaScript calcula el área de un triángulo con lados de longitud 5, 6 y 7 usando la fórmula de Heron. 
Primero calcula el semiperímetro del triángulo y luego lo usa para hallar el área, que se registra en la consola
*/

function areaTriangulo (lado1,lado2,lado3){
      let total = lado1+lado2+lado3;
      let valor = total/2;
      let resultado = Math.sqrt (valor*(valor-lado1)*(valor-lado2)*(valor-lado3));
      return resultado;
}
console.log(areaTriangulo(5,6,7,));
