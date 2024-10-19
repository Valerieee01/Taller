let numero = parseFloat(prompt("Ingrese el numero a evaluar: "));

const esPrimo =  (a) =>{
    let primo = true ;
    for (let i = 2; i < a; i++) {
       if(a % i === 0){
        primo = false;
        break;
       }
    }
    return primo;
}

console.log(esPrimo(numero));
