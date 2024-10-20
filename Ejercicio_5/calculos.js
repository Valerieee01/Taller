function suma(a,b) {
    return alert(`La suma es: ${a + b}`);
}

function resta(a,b) {
    return alert(`La suma es: ${a - b}`);
}

function multiplicacion(a,b) {
    return alert(`La suma es: ${a * b}`);
}

function division(a,b) {
    if (b === 0){
        return alert("No se puede dividir por 0");
    } else{
        return alert(`La suma es: ${a / b}`);
    }
}



export const calculadora = {
    suma: suma,
    resta: resta,
    multiplicacion: multiplicacion,
    division: division
}

