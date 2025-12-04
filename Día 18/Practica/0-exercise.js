*
    Crea una función llamada contarPares(array) que recorra un arreglo de números y 
    cuente cuántos de esos números son pares.
    Debes usar un ciclo for.
    Dentro del ciclo, usa el operador % (módulo) para verificar si un número es par.
    Explicación: num % 2 === 0 significa que el número es par.
    Retorna la cantidad total de números pares.
    */
      
     let meArray = [2,3,4,6,7,8,10,15,16];
    function contarPares(meArray){
        let contador = 0;
        for(i=0; i < meArray.length ; i++){
            if(meArray[i] %2 == 0){
                contador++;
                console.log(meArray[i])
            }
        }
        return contador; 
    }
    console.log(contarPares(meArray))

