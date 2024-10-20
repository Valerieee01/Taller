/**
 * nTarjeta {int} numero de la tarjeta ingresada por el usuario
 * verificaTrajeta exporta todos los metodos del modulo tarjetas
 */

import { tarjetas, verificarTrajeta } from "./tarjetas.js";


while (true) {
    let nTarjeta = parseInt(prompt("Ingrese el N° de su tarjeta: "));
    try {
        if(isNaN(nTarjeta)){
            throw new Error("Caracter no permitido");
        } 
        if (nTarjeta.length > 16) { // se evalia que no se ingren mas de 16 caracteres
            throw new Error("No es valido el numero error de caracteres");
        }
        if (nTarjeta < 0) { // no recibe numeros negativos
            throw new Error("No se aceptan numeros negativos"); 
        }
    alert(`Excelente, tu tarjeta es ${verificarTrajeta(nTarjeta)}`);
    break;
    } catch (error) {
        alert(Error.message);
    }
}