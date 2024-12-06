const leia = require('readline-sync')

let matrizAlunos = new Array(10);
for (let indice = 0; indice < matrizAlunos.length; indice++) {
    matrizAlunos[indice] = Array(4);
}

for (let iLinha = 0; iLinha < matrizAlunos.length; iLinha++) {
        for (let iColuna = 0; iColuna < matrizAlunos[iLinha].length; iColuna++) {
        matrizAlunos[iLinha][iColuna] = leia.questionFloat("Digite uma nota: ")
    }
}

medias = new Array(10);
for (let iLinha = 0; iLinha < matrizAlunos.length; iLinha++) {
    soma = 0;
    for (let iColuna = 0; iColuna < matrizAlunos[iLinha].length; iColuna++){
        soma += matrizAlunos[iLinha][iColuna];
        medias[iLinha] = (soma / 4).toFixed(1);
    }
}

console.log(medias);