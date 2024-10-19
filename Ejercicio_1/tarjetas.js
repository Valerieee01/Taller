function america (numero) {
    let exp = /^3[4-7]\d{13}$/;  // el elevado dice que inicia el pesos dice que termina
    return exp.test(numero);
}

function diners(numero) {
    let exp = /^3(?:0[0-5]|[68]\d)\d{11}$/
    return exp.test(numero);
}

function discover(numero) {
    let exp = /^6011\d{12}$/;
    return exp.test(numero);
}
 // 16 digitos 51 - 55
function masterCard(numero) {
    let exp = /^5([1-5])\d{14}$/;
    return exp.test(numero);
}

function visa(numero) {
    let exp = /^4\d{15}$/;
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