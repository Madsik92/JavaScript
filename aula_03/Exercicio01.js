const leia = require('readline-sync')

let A = leia.questionInt('Digite o numero A: ');
let B = leia.questionInt('Digite o numero B: ');
let C = leia.questionInt('Digite o numero C: ');
let soma = (A + B);

if(soma > C){
    console.log('\nA Soma de A + B e Maior que C')
}else{
    console.log('\nA Soma de A + B é Menor que C')
}