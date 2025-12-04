   // Crea una función que reciba un arreglo de números y sume todos los valores que sean mayores a 10.

let meArray = [10,20,5,3,8,9,11];
function sumaValue (meArray){
    let suma = 0;
    for(let i=0; i < meArray.length; i++){
        if(meArray[i] > 10){
            suma = suma + meArray[i];
        }
    }
    return suma;
}
console.log(sumaValue(meArray))
