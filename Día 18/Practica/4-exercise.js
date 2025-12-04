// Crea una función en JavaScript que recorra un arreglo de números 
// y encuentre el valor más pequeño dentro del arreglo.

let valueMenor = [2,3,4,5,6,7,8,9]
function valor(valueMenor){
     let almacenarMenor = valueMenor[0]
    for(let i=0; i < valueMenor.length; i++){
        if(valueMenor[i] < almacenarMenor){
            almacenarMenor = valueMenor[i];
        }
    }
    return almacenarMenor;
}
console.log(valor(valueMenor));
