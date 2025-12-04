    //Crea una función que cuente cuántos números negativos hay en un arreglo.

 let negativeArray = [-1,2,-5,6,7,-8]
    function value (negativeArray){
       let  contar = 0;
       for(i=0; i < negativeArray.length; i++){
            if(negativeArray[i] < 0){
                contar++;
                console.log(negativeArray[i])
            }
            
       }
       return contar;
    }
    console.log(value(negativeArray))
