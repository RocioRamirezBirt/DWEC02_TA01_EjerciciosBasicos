/*
Objetivo: Implementar estructuras iterativas para controlar el flujo del programa. 
Descripción: Desarrolla un juego donde el programa genera un número aleatorio entre 1 y 100, y el usuario 
debe adivinarlo. El programa: 

1. Genera un número aleatorio entre 0 y 1 → Math.random() 
2. Solicita al usuario que introduzca un número. 
3. Usa una estructura condicional if-else para informar si el número ingresado es mayor o menor que 
el generado. Informa también el número generado e ingresado coinciden 
4. Cierra el programa */

"use strict";
const readline = require("readline/promises");

async function main() {
    const rl = readline.createInterface({
        input:process.stdin,
        output: process.stdout
    })

    const aleatorio = Math.floor(Math.random() *100)+1;
    let numero;

    do {
        numero = Number(await rl.question("Introduce un numero del 1 al 100 "));

        //comprobar que es un numero
        if(Number.isNaN(numero)){
            console.log("Dato Invalido. Por favor introduce el dato correcto")
        } else if (numero > aleatorio){
            console.log("El numero que has introducido es el "+numero + " y es mayor que el numero generado. Intentalo de nuevo");
        } else if (numero < aleatorio){
            console.log("El numero que has introducido es el "+numero + " y es menor que el numero generado. Intentalo de nuevo");
        }
    }while (numero != aleatorio)
        console.log("Has acertado el numero que has introducido es el "+numero + " y es igual que el numero generado");
    rl.close();
} 

main()
