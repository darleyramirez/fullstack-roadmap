// Escriba un programa en javascript para comprobar un par de números y devovlerlo.
// verdadero si uno de los numeros es 50 o si la suma es 50

function devolver(par1, par2){
    if(par1 === 50 || par2 === 50){
        return true;
    }else if(par1+par2 === 50){
        return true;
    }else{
        return false;
    }
}
console.log(devolver (50));
console.log(devolver(25+25));
console.log(devolver(10));
