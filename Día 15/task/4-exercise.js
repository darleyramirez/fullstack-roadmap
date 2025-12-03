/*
Escriba un programa en JavaScript para encontrar el área de un triángulo donde tres lados son 5, 6, 7.

Este programa JavaScript calcula el área de un triángulo con lados de longitud 5, 6 y 7 usando la fórmula de Heron. 
Primero calcula el semiperímetro del triángulo y luego lo usa para hallar el área, que se registra en la consola
*/
function areaTriangulo (lado1,lado2,lado3){
      let total = lado1+lado2+lado3;
      let perimetro = total/2;
      let a = perimetro-lado1;
      let b = perimetro-lado2;
      let c = perimetro-lado3;
      let total1= a+b+c;
      return total1;
    
}
console.log(areaTriangulo(5,6,7,));
