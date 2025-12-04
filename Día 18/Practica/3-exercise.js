//EJERCICIO 3 — Encontrar el número más grande del arreglo

let meArray = [1,2,3,4,5,6,7,8,9,10];
function higherValue (meArray){
    let almacenar=0;
    for(let i=0; i < meArray.length; i++){
        if(meArray[i] > almacenar){
            almacenar = meArray[i];
        }
    }
    return almacenar;

}
console.log( higherValue(meArray))
