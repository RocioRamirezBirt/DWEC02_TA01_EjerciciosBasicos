/* 
Objetivo: Utilizar diferentes tipos de variables y estructurar correctamente el flujo del programa con 
múltiples condiciones y bucles. 

Descripción: Crea una versión personalizada del clásico problema "FizzBuzz": 
1. Solicita al usuario ingresar un número máximo y dos divisores. 
2. Itera desde 1 hasta n usando un bucle for. 
1. Si el número actual es divisible por el primer número, imprime "Fizz", 
2. Si es divisible por el segundo número imprime "Buzz".  
3. Si es divisible por ambos, imprime "FizzBuzz". Si no, imprime el número.

*/

const readline = require('readline/promises');

async function main () {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
     });

     let numero;
     let valido = false;
     let div1;
     let div2;

    
    while (!valido) {
        numero = Number(await rl.question("Introduce un número para jugar al (FizzBuzz):"));

        if (Number.isNaN(numero)) {
            console.log("Eso no es un número. Inténtalo de nuevo.");
        } else if (numero === 0) {
            console.log("El número no puede ser cero. Inténtalo de nuevo.");
        } else {
            valido = true;
        }
    }

        // comprobacion del primer divisor
        valido = false
        while(!valido){
            div1 = Number(await rl.question("Introduce el primer divisor (Fizz):"));

            if(Number.isNaN(div1)){
                console.log("No es un numero. Intentalo de nuevo");
            }else if (div1 === 0){
                console.log("El divisor no puede ser cero. Intentalo de nuevo.");
            }else {
                valido = true;
            }
        }

       
        // comprobacion del segundo divisor
        valido = false
        while(!valido){
            div2 = Number(await rl.question("Introduce el segundo divisor (Buzz):"));

            if(Number.isNaN(div2)){
                console.log("No es un numero. Intentalo de nuevo");
            }else if (div2 === 0){
                console.log("El divisor no puede ser cero. Intentalo de nuevo.");
            }else {
                valido = true;
            }
        }
    rl.close();

    for (let i=1; i<=numero; i++){
        if(i % div1 === 0 && i % div2 ===0){
            console.log("FizzBuzz");
        }else if (i % div1 === 0){
            console.log("Fizz");
        }else if (i % div2 === 0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }
}
main ()


        


      