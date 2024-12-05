const leia = require('readline-sync')

let saldo = 1000;

console.log('\nCOD. -  Operacao');
console.log(' 1   -     Saldo');
console.log(' 2   -     Saque');
console.log(' 3   -  Deposito');

let contaBancaria = leia.questionInt('\nDigite o Codigo da sua operacao: ');

switch(contaBancaria){
    case 1:
        console.log('\nOperacao - Saldo');
        console.log(`Saldo: R$ ${saldo.toFixed(2)}`);
        break;
    case 2:
        console.log('\nOperacao - Saque');
        console.log(`Saldo Atual: R$ ${saldo.toFixed(2)}`);
        saque = leia.questionFloat('\nDigite valor do seu Saque: ');        
        novoSaldo = (saldo - saque)
        if(novoSaldo < 0){
            console.log('Saldo Insuficiente!')
        }else{
            console.log(`Novo Saldo: R$ ${novoSaldo.toFixed(2)}`);
        }
        break;
    case 3:
        console.log('\nOperacao - Deposito');
        console.log(`Saldo Atual: R$ ${saldo.toFixed(2)}`);
        deposito = leia.questionFloat('\nDigite valor do seu Deposito: ');
        novoSaldo = (saldo + deposito);
        console.log(`Novo Saldo: R$ ${novoSaldo.toFixed(2)}`)
        break;
    default:
        console.log('Operacao Invalida!')
}

