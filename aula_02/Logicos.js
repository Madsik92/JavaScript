const leia = require('readline-sync')

// Dados do usuário
const usuario = 'user@email.com.br'
const senha = 'user1234'
const isAdmin = false
const isGerente = true
const isBlock = false

console.log("\nTela de Login")

let usuarioLogin = leia.question('Digite o seu usuario: ')
let senhaLogin = leia.question('Digite a sua senha: ', {hideEchoBack: true, })

if(usuarioLogin === usuario && senhaLogin === senha) {
    var mensagem = "Seja Bem Vinde! Usuário autenticado com Sucesso!"
}else{
    var mensagem = "Acesso negado!"
}

console.log(mensagem)

if(!isBlock){
    console.log("Usuário está ativo!")
}else{
    console.log("Usuário está inativo! Contate o Administrador!")
    process.exit(0)
}

if(isAdmin || isGerente){
    console.log("Acesso ao painel de Administração")
}