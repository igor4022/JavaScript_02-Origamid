// Exemplo 1:

// Você sempre pode executar e rexecutar funções chamando elas de novo...

function areaQuadrada(lado) {

    console.log('Função ativa')
    return lado * lado
}

console.log(areaQuadrada(10))

function pi() {

    return 3.14
}

var total = 5 * pi()

console.log(pi())

// Exemplo 2:

// Au criar uma função, você pode definir parâmetros...
// Au executar uma função, você pode passar argumentos..

// peso e altura são os parâmetros...

// 80 e 1.80 são os argumentos...

function imc(peso, altura) {

    var imc = peso / (altura * altura)

    return imc
}

console.log(imc(80, 1.80))

// Exemplo 3:

function corFavorita(cor) {

    if (cor === 'azul') {

        return 'Eu gosto do céu'
    } else if (cor === 'verde') {

        return 'Eu gosto da grama'
    } else {

        return 'Sou daltonico'
    }
}

// Exemplo 4:

// Argumentos podem ser funções; Chamadas de 'Callback'. geralmente são funções que ocorrem após algum evento...

addEventListener('click', function () {

    console.log('Oi')
})

// Exemplo 5:

// Pode ou não retornar um valor...

// Quando não difinimos o 'return', ela irá retornar 'undefined'...
// O código inteiro da função é executado normalmente, independente de existir valor 'return' ou não...

function imc2 (peso, altura) {

    const imc = peso / (altura ** 2)

    console.log(imc)
}

imc2(80, 1.80)

console.log(imc2(80, 1.80))

// Exemplo 6:

function terceiraIdade (idade) {

    if (typeof idade !== 'number') {

        console.log('Porfavor digíte sua idade')
    } else if (idade >= 60) {

        console.log('Você é um idoso')
    } else {
        console.log('Você não é um idoso')
    }

    console.log(idade)
}

console.log(terceiraIdade(60))

// Exemplo 7:

// Variáveis e funções definidas de um bloco '{}', não são visíveis fora dele...

function paisesVisitados (visitados) {

    var totalPaises = 193

    return `Falta visitar ${totalPaises - visitados} países`
}

// Exemplo 8:

// Escopo Léxico...

// Funções conseguem acessar variáveis que foram criadas no contexto 'pai'...

var profisao = 'Desigener'

function dados() {

    var nome = 'Igor'
    var idade = 16

    function outrosDados () {

        var endereso = 'Timbó'
        var idade = 17

        return `${nome}. ${idade}, ${endereso}, ${profisao}`
    }

    return outrosDados()
}

console.log(dados())