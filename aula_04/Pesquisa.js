const leia = require('readline-sync')

let idade,
    esporte,
    futebol = 0,
    voleiMaiores18 = 0,
    basqueteMenores18 = 0,
    outros = 0,
    continua = 'S';

while (continua === 'S') {
    idade = leia.questionInt('Digite sua idade: ')

    // Validacao
    do {
        esporte = leia.questionInt('Digite seu Esporte Favorito (1-FUT/2-VOL/3-BASQ/4-OUTROS): ')

        if (esporte < 1 || esporte > 4)
            console.log("Digite o número entre 1 e 4");


    } while (esporte < 1 || esporte > 4)

    if (esporte === 1) {
        futebol++;
    }

    if (esporte === 2 && idade > 18) {
        voleiMaiores18++;
    }

    if (esporte === 3 && idade < 18) {
        basqueteMenores18++;
    }

    if (esporte === 4)
        outros++;

    continua = leia.question("Deseja continuar (S/N)? ").toLocaleUpperCase();
}

console.log(`Total de pessoas que gostam de futebol: ${futebol}`)
console.log(`Total de pessoas que gostam de voleibol e são maiores de 18 anos: ${voleiMaiores18}`)
console.log(`Total de pessoas que gostam de basquetebol e são menores de 18 anos: ${basqueteMenores18}`)
console.log(`Total de pessoas que gostam de outros esportes: ${outros}`)

