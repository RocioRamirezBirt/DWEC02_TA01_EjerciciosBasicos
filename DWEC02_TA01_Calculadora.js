/*
Objetivo: Introducir variables, tipos de datos, operadores y estructuras condicionales. 
Descripción: Crea un programa en JavaScript que funcione como una calculadora básica. El programa debe: 
1. Solicitar dos números al usuario. 
2. Solicitar el tipo de operación que desea realizar: suma, resta, multiplicación o división. 
3. Utilizar estructura condicional switch para determinar qué operación realizar 
4. Mostrar el resultado en la consola. 
*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Introduce el primer numero: ", (num1) => {
    
    rl.question("Introduce el segundo numero: ",(num2) =>{

        rl.question("Introduce la operacion a realizar: suma, resta multiplicacion o division: ",(operacion) => {

          num1 = parseInt(num1);
          num2 = parseInt(num2);

          operacion = operacion.toLowerCase();

          switch(operacion){
            case "suma":
                console.log("El resultado de la " + operacion + " es: " + (num1 + num2));
                break;
            case "resta":
                console.log("El resultado de la " + operacion + " es: " + (num1 - num2));
                break;
            case "multiplicacion":
                console.log("El resultado de la " + operacion + " es: " + (num1 * num2));
                break;
            case "division":
                console.log("El resultado de la " + operacion + " es: " + (num1 / num2));
                break;
            default:
                console.log("Opercion no valida. Por favor introduce suma, resta, multiplicacion o division");
          }

          rl.close();
        })
    })
});