// Atividade 1: Fluxograma
const leia = require('readline-sync')

let salario = leia.questionFloat('\nDigite o Salario: ');

console.log(salario)

let abono = leia.questionFloat('\nDigite o Abono: ');

console.log(abono)

console.log('\nNovo Salario: ', new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(salario + abono));
