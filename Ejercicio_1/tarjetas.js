/**
 * @method america @returns {Boolean}
 * @method diners @returns {Boolean}
 * @method discover @returns {Boolean}
 * @method masterCard @returns {Boolean}
 * @method visa @returns {Boolean}
 * @param {int} numero
 * @module tarjetas @exports methods
 */

function america (numero) {
    let exp = /^3[4-7]\d{13}$/;  // esta expresion regular evalua que no tenga mas de 15 digitos, que inicie en un numero de 34-37, y que sean solo numeros
    return exp.test(numero);
}

function diners(numero) {
    let exp = /^3(?:0[0-5]|[68]\d)\d{11}$/ // esta expresion regular evalua que tenga mas de 14 digitos, que empiece por  300 - 305, o 36 - 38 y sean solo numeros
    return exp.test(numero);
}

function discover(numero) {
    let exp = /^6011\d{12}$/; //esta expresion regular evalua que tenga 16 digitos que empiece en 6011 y sean solo numeros 
    return exp.test(numero);
}
 // 16 digitos 51 - 55
function masterCard(numero) {
    let exp = /^5([1-5])\d{14}$/; // esta expresion regular evalua que tenga 16 digitos, que empiece por 51-55 y solo sean numeros
    return exp.test(numero);
}

function visa(numero) {
    let exp = /^4\d{15}$/; // esta expresion regular evalua que tenga 15 digitos, que empiece por 4 y solo sean numeros 
    return exp.test(numero);
}


export function verificarTrajeta(numero) {
    let tipoTarjeta = " ";
    if (america(numero)){
         tipoTarjeta ="American";
    } else if (diners(numero)){
         tipoTarjeta ="Diners";
    }else if (discover(numero)){
         tipoTarjeta ="Discover";
    }else if (masterCard(numero)){
         tipoTarjeta ="masterCard";
    }else if (visa(numero)){
         tipoTarjeta ="Visa";
    }else{
        tipoTarjeta = "No se encuentra en nuestras opciones";
    }
    return tipoTarjeta;
}
export const tarjetas = {
    america : america,
    diners : diners,
    discover: discover,
    masterCard: masterCard,
    visa: visa
}