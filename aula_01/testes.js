// var n1;
const leia = require('readline-sync')

let n1, n2;

n1 = leia.questionFloat("Digite o primeiro numero: ")
n2 = leia.questionFloat("\nDigite o segundo numero: ")


// var a variavel é global. let tem mais controle, ele respeita o escopo. var é a forma antiga.

console.log("\nA variável N1 possui o valor", n1)
console.log("\nA variável N2 possui o valor", n2)

// soma = n1 + n2;

console.log ("\nA soma de n1 + n2 é igual a: ", n1 + n2)
console.log ("\nA subtração de n1 - n2 é igual a: ", n1 - n2)
console.log ("\nA multiplicação de n1 * n2 é igual a: ", n1 * n2)
console.log ("\nA divisão de n1 / n2 é igual a: ", n1 / n2)
console.log ("\nA potenciação de n1 ^ n2 é igual a: ", Math.pow(n1, n2))
console.log ("\nA raiz quadrada de n1 é igual a: ", Math.sqrt(n1))

