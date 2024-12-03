let nome = "Jessica";
let profissao = "Pessoa desenvolvedora Junior";
let salarioBruto = 3500.44;
const bonus = 0.05;

console.log("\nNome: ", nome)
console.log("\nProfissão: ", profissao)

console.log('\nSalário liquido: ', new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(salarioBruto + (bonus * salarioBruto)));

// Interpolação de strings
console.log("\nSalário Bruto do Colaborador " + nome + " é " + salarioBruto)

console.log(`\nSalário Bruto do Colaborador ${nome} é ${salarioBruto}`);
// Interpolação de strings






// console.log("\nTipo da variável: ", typeof nome)

// nome = 12

// console.log("\nNome: ", nome)
// console.log("\nTipo da variável: ", typeof nome)
