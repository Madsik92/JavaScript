const leia = require('readline-sync')

let num = leia.questionInt('Digite um numero: ');

if(num %2 == 0 && num >= 0){
    console.log('\nO número é Par e Positivo!');
}else if(num %2 == 0 && num < 0){
    console.log('\nO número é Par e Negativo!');
}else if(num %2 == 1 && num > 0){
    console.log('\nO número é Ímpar e Positivo!');
}else if(num %2 == 1 && num < 0){
    console.log('\nO número é Ímpar e Negativo!');
}