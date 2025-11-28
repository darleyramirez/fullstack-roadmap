// 1. Display Current Day and Time
/*
Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/

const diaDeSemana = ["Domingo","Lunez","Martes","Miercoles","Jueves","Viernes","Sabado"];
const dia = new Date;
let dias = diaDeSemana[dia.getDay()];
console.log(dia)

let horas = dia.getHours();
console.log(horas)

let minutos = dia.getMinutes();
console.log(minutos);

let segundos = dia.getSeconds();
console.log(segundos)

let miliSegundos = dia.getMilliseconds();
console.log(miliSegundos)

let meridiam = horas < 12 ? "Am" : "Pm";
console.log(meridiam)

console.log(diaDeSemana[dia.getDay()])
let x = diaDeSemana[dia.getDay()]; 

console.log(`Hoy es ${x} La hora actual es ${horas}:${minutos}:${segundos}:${miliSegundos} ${meridiam}`)
