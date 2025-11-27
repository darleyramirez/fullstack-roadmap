// Escribe un programa en javaScript para obtener la diferencia entre un valor dado y 13, si el número es 
// Mayor a 13  devuelve el doble de la diferencia absoluta

function diferencia(valorDado){
    if(valorDado <= 13){
     let total = valorDado - 13;   
     return total;
    }else{
         valorDado > 13
        let total = valorDado - 13;
         return total * 2;
    }
}
console.log(diferencia(20));
console.log(diferencia(13));

// Otra forma de hacerlo 

function diferencia (valorDado){
    if(valorDado <= 13){
       return valorDado - 13;
    }else {
       let total = valorDado - 13
        return total * 2;
    }
}
console.log(diferencia(13));
console.log(diferencia(20));
