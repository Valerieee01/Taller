function sumarNumeros(...array) {
    let suma = 0;
    for(let i of array) suma+=i;
    return alert(`La suma de los numeros es: ${suma}`);
}

function contarPrimos(...array) {
    let arrayPrimos = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element < 2) {
            continue; 
        }

        let esPrimo = true; 
        for (let f = 2; f <= Math.sqrt(element); f++) {
            if (element % f === 0) {
                esPrimo = false; 
                break; 
            }
        }
        if (esPrimo) {
            arrayPrimos.push(element);
        }
    }

    console.log(arrayPrimos); 
    let tamano = arrayPrimos.length; 
    alert(`La cantidad de numeros primos es: ${tamano} `);
    return arrayPrimos; 
}

function contarPares(...array) {
    console.log(array);
    
    let arrayPares = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element % 2 === 0){
            arrayPares.push(element);
        }
    }

    console.log(arrayPares); 
    let tamano = arrayPares.length; 
    alert(`La cantidad de numeros pares es: ${tamano}`);
    return arrayPares; 
}


function calcPromedioPrimos(...array) {
    let arrayPrimos = contarPrimos(...array);
    let suma = 0;
    if (arrayPrimos.length > 0) {
        for (const element of arrayPrimos) {
            suma += element;
        }
        let promedio = suma / arrayPrimos.length;
        return alert(`El promedio de los numeros primos es: ${promedio}`);
    } else{
        return alert(`No ingresaste numeros primos`);

    }
}

function calcPromedioPares(...array) {
    let arrayPares = contarPares(...array);
    console.log(arrayPares);
    let suma = 0;
    if (arrayPares.length > 0) {
        for (const element of arrayPares) {
            suma += element;
        }
        let promedio = suma / arrayPares.length;
        return alert(`El promedio de los numeros pares es: ${promedio}`);
    } else{
        return alert(`No ingresaste numeros pares`);

    }
}





export const operaciones = {
    sumarNumeros: sumarNumeros,
    contarPrimos:contarPrimos,
    contarPares: contarPares,
    calcPromedioPrimos : calcPromedioPrimos,
    calcPromedioPares: calcPromedioPares

}