const leia = require('readline-sync')

let salarioBruto = leia.questionFloat('Digite seu Salario Bruto: ');

let adicionalNoturno = leia.questionFloat('\nDigite seu Adicional Noturno: ');

let horasExtras = leia.questionFloat('\nDigite Horas Extras: ');

let descontos = leia.questionFloat('\nDigite Descontos: ');


console.log("\nSeu Salario Liquido é: ", (salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos))