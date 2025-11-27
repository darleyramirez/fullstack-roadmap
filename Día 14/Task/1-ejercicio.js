// Escriba un programa en JavaScript para calcular la suma de los dos numeros enteros dados
// Si los dos valores son iguales, entonces devuelve el triple del valor

function suma(valorEntero1,valorEntero2){
    if(valorEntero1 != valorEntero2){
        return valorEntero1 + valorEntero2;
    }else {
        return (valorEntero1+valorEntero2) * 3;
    }
}
console.log(suma(14,14));
console.log(suma(20,25));
