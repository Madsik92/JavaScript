const leia = require('readline-sync')

let n1 = leia.questionFloat('\nDigite um valor: ');
let n2 = leia.questionFloat('\nDigite um outro valor: ');
let n3 = leia.questionFloat('\nDigite um outro valor: ');
let n4 = leia.questionFloat('\nDigite um ultimo valor: ');

console.log("\nA diferença é: ", (n1 * n2) - (n3 * n4).toFixed(1))