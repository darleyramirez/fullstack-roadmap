/*
Hacer una funcion que reciba dos parametro, jugador1 (el que inicia el juego) y otro que se llama jugador 2. despues de cada 2 puntos se necesita que la funcion diga quien es la persona que saca; decirle a la funcion los puntos que lleva cada jugador.
Gana el jugador que llegue a 11.
Reglas:
- El juego se juega entre 2 jugadores
- El jugador 1 comienza sacando
- Se cambia de saque cada 2 puntos
- Gana el primero que llegue a 11 puntos
Objetivo:
Crear una función que reciba:
- Nombre del jugador 1
- Nombre del jugador 2
- Puntos actuales del jugador 1
- Puntos actuales del jugador 2
La función debe retornar:
- Quién debe sacar en este momento
- Si el juego ha terminado y quién ganó
*/


function juego (jugador1, jugador2, puntos1, puntos2){
    let turno;
    let total = puntos1 + puntos2;
    let ronda = Math.floor(total /2);
        turno = ronda;
    if(puntos1 == 0){
        console.log("Saca el juegador1: "+jugador1)
    }else if( turno %2 == 0 ){
        console.log("turno par sacar jugador1")
    }else{
        console.log("Turno impar saca jugador2")
    }
    console.log("Total de puntos", total)
    console.log("Rondas", ronda)
    console.log("Puntos del jugador1", puntos1 + jugador1)
    console.log("Puntos del jugador2", puntos2 + jugador2)

    if(puntos1 >= 11){
        console.log("Juego Finalizado, Gana el jugador1: "+jugador1)
    }else if(puntos2 >= 11){
       console.log("Juego Finalizado, Gana el jugador2: "+jugador2) 
    }
}
console.log(juego("juan","pedro",1,7))
