/*
4. Diseñar un programa que me permita ingresar n cantidad de palabras por
teclado, al finalizar la carga, se debe enviar como a una función expresada
como único parámetro rest donde nos responderá cual de las palabras
ingresadas es mayor a todas las anteriores.
*/

function solicitarNumeros(params) {
    let arrayPalabras =[];
    let palabra;
    while (true) {
        palabra = (prompt("Ingresa un palabra (para terminar el ingreso de números escriba:  salir): ")).toLowerCase();
        if(palabra !== "salir"){
            arrayPalabras.push(palabra);
        }else if (palabra === "salir"){
            break;
        }
    }

    ordenarPalabras(...arrayPalabras);
    return ;
}

function ordenarPalabras(...array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let f = 0; f < array.length - 1 - i; f++) {
          if (array[f] < array[f + 1]) {
            // Intercambiar los elementos
            let temp = array[f];
            array[f] = array[f + 1];
            array[f + 1] = temp;
          }
        }
      }

    console.table(array);
    return alert(`La palabra mayor es ${array[0]}`);
}



solicitarNumeros();