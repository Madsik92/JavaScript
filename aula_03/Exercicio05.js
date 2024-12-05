const leia = require('readline-sync')

console.log('\nCOD. -           Produto');
console.log(' 1   -   Cachorro Quente');
console.log(' 2   -          X-Salada');
console.log(' 3   -           X-Bacon');
console.log(' 4   -             Bauru');
console.log(' 5   -      Refrigerante');
console.log(' 6   -   Suco de laranja');

let produto = leia.questionInt('\nDigite o Codigo do Produto: ');
let preco;
let nomeProduto;

switch(produto){
    case 1:
        preco = 10.00;
        nomeProduto = "Cachorro Quente";
        break;
    case 2:
        preco = 15.00;
        nomeProduto = "X-Salada";
        break;
    case 3:
        preco = 18.00;
        nomeProduto = "X-Bacon";
        break;
    case 4:
        preco = 12.00;
        nomeProduto = "Bauru";
        break;
    case 5:
        preco = 8.00;
        nomeProduto = "Refrigerante";
        break;
    case 6:
        preco = 13.00;
        nomeProduto = "Suco de Laranja";
        break;
    default:
        console.log('Produto Invalido')
}

let quantidade = leia.questionInt('\nDigite a quantidade: ');
let total = (quantidade * preco)


console.log(`\nProduto: ${nomeProduto} - R$ ${preco.toFixed(2)} * ${quantidade}`);

console.log('Valor total: R$', total.toFixed(2));
