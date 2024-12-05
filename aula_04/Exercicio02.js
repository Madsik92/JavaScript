const leia = require('readline-sync')

let pares = 0;
let impares = 0;

for(let contador = 1; contador <= 10; contador++){
    let numero = leia.questionInt(`Digite o ${contador} numero: `);

    if (numero %2 === 0){
        pares++
    }else{
        impares++
    }
}

console.log('\nTotal de numeros pares: ', pares)
console.log('\nTotal de numeros pares: ', impares)