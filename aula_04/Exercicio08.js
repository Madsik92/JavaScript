const leia = require('readline-sync')

//linhas da Matriz
let vetorInt = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
let = soma = 0, media = 0;


console.log("\nElementos nos indices impares: ")
for(let contador = 1; contador < vetorInt.length; contador += 2){
    console.log(vetorInt[contador]);
}

console.log("\nElementos pares: ")
for(let contador = 0; contador < vetorInt.length; contador ++){
    if(vetorInt[contador] %2 === 0) {
        console.log(vetorInt[contador])
    }
}

for (let contador = 0; contador < vetorInt.length; contador++) {
    soma += vetorInt[contador];
    media = (soma / 10);
}

console.log("\nSoma: ", soma);
console.log("\nMedia: ", media.toFixed(2));





