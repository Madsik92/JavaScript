const leia = require('readline-sync')

let nota1 = leia.questionFloat('Digite a primeira nota: ');
let nota2 = leia.questionFloat('\nDigite a segunda nota: ');
let nota3 = leia.questionFloat('\nDigite a terceira nota: ');
let nota4 = leia.questionFloat('\nDigite a quarta nota: ');

console.log("\nA media final é: ", ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(1))