/*
5. Diseñar un modulo llamado calculadora, en este módulo debe exportar una
clase con los siguientes metodos:
a. Suma
b. Resta
c. Multiplicación
d. División
Al momento de realizar cada operación el sistema debe validar que no se
presenten errores, si al momento de su ejecución se presenta algún error, el
sistema debe enviar un mensaje personalizado indicando el tipo de error
para que el usuario lo solucione y continue realizando los cálculos básicos
de las matemáticas.
*/
import {calculadora} from './calculos.js';
while (true) {
    try {
        let a = parseFloat(prompt("Ingresa el primer numero: "));
        let b = parseFloat(prompt("Ingresa el segundo numero: "));
        
        if (isNaN(a)) {
            throw new Error("Caracter no permitido");
        }
        if (isNaN(b)) {
            throw new Error("Caracter no permitido");
        }
        
        let op = parseInt(prompt(`BIENVENIDO A TU CALCULADORA.COM
        1. Suma
        2. Resta
        3. Multiplicación
        4. División
        Escribe aquí tu respuesta: `));
        
        if (isNaN(op)) {
            throw new Error("Caracter no permitido");
        }

        if ((op < 1) || (op > 4)){
            throw new Error("ERROR, NO SE ENCUENTRA EN NUESTRAS OPCIONES");
        }

        if (op === 1) {
            calculadora.suma(a, b);
            break;
        } else if (op === 2) {
            calculadora.resta(a, b);
            break;
        } else if (op === 3) {
            calculadora.multiplicacion(a, b);
            break;
        } else if (op === 4) {
            calculadora.division(a, b);
            break;
        } 
    
    } catch (error) {
        alert(error.message); 
    }
}