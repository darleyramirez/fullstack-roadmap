// 3. Get Current Date in Various Formats

/*
Write a JavaScript program to get the current date.  
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
const formato = new Date();

let formatoFecha = meses [formato.getDay];
console.log(formato);

let mes = formato.getMonth();
console.log(mes)

let dia = formato.getDate();
console.log(dia)

let año = formato.getFullYear();
console.log(año)

console.log(`${mes}-${dia}-${año}`)
console.log(`${mes}/${dia}/${año}`)

console.log(`${dia}-${mes}-${año}`)
console.log(`${dia}/${mes}/${año}`)
