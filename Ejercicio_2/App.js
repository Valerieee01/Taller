import {operaciones} from './operaciones.js'
let n = 1;
let arrayNumeros = [];
while (n >= 0) {
    n = parseInt(prompt("Ingrese un numero (si desea salir ingrese un numero negativo): "))
    if (n >= 0){
        arrayNumeros.push(n);
    }
}
console.log(arrayNumeros);

let op;
while (true) {
   op = prompt(`
      Selecciona la operacion que deseas realizar: 
   a. Sumar los números
   b. Contar los números primos
   c. Contar los números pares
   d. Calcular el promedio de los números primos
   e. Calcular el promedio de números pares
   `)
      if (op.toLowerCase() === "a") {
         operaciones.sumarNumeros(...arrayNumeros);
         break;
      } else if (op.toLowerCase()  === "b"){
         operaciones.contarPrimos(...arrayNumeros);
         break;
      } else if(op.toLowerCase()  === "c"){
         operaciones.contarPares(...arrayNumeros);
         break;
      } else if (op.toLowerCase()  === "d"){
         operaciones.calcPromedioPrimos(...arrayNumeros);
         break;
      } else if(op.toLowerCase()  === "e"){
         operaciones.calcPromedioPares(...arrayNumeros);
         break;
      } 
      
   }
 
