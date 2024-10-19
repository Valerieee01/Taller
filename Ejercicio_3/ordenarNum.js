/*
3. Diseñar un programa que me solicite por teclado n cantidad de números, al
finalizar la carga de los números el programa debe enviar los números a
una función expresada como único parámetro rest donde serán ordenados
de mayor a menor para luego mostrarlos en una tabla por consola.
*/


function solicitarNumeros(params) {
    let arrayNumeros =[];
    let numero;
    while (true) {
        numero = parseInt(prompt("Ingresa un numero (0 para salir): "));
        if(numero !== 0){
            arrayNumeros.push(numero);
        }else if (numero === 0){
            break;
        } else if (isNaN(numero)){
            alert(`ICORRECTO, INTENTA NUEVAMENTE`);
        }
    }

    OrdenarNumeros(...arrayNumeros);
    alert("Revisa tu consola y veras los numeros organizados de mayor a menor");
    return ;
}

function OrdenarNumeros(...array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let f = 0; f < array.length - 1 - i; f++) { // se compara el actual con el siguiente
            if (array[f] < array[f + 1]) {  // Si el elemento actual es menor que el siguiente, los intercambia
                let temp = array[f];
                array[f] = array[f + 1];
                array[f + 1] = temp;
            }
        }
    }

    console.table(array);
    return array;
}



solicitarNumeros();