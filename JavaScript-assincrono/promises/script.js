// Exemplo 1:

// nova Promessa()...Promise é uma função construtora de promessas. Existem dois resultados possíveis de uma promessa, ela pode ser resolvida, com a execução do primeiro argumento, ou rejeitada se o segundo argumento para acionado...

const promesa = new Promise((resolve, reject) => {
    let consdicao = true
    if(consdicao) {
        resolve('Boa!')
    } else {
        reject(Error)
    }
})

console.log(promesa)

// Exemplo 2:

// então()...O poder das Promessas não é um método then()do seu protótipo. O Callback deste método só será ativado quando a promessa for resolvida. O argumento do callback será o valor passado na função resolve...

promesa.then((resolucao) => {
    console.log(resolucao)
})

// Exemplo 3:

// Assíncrono...As promessas não fazem sentido quando o código executado dentro da mesma é apenas código síncrono. O poder está na execução do código assíncrono que será executado resolve()ao final dele...

const promesa2 = new Promise((resolve, reject) => {
    let consdicao = true
    if(consdicao) {
        setTimeout(() => {
            resolve('Boa!')
        }, 1000)
    } else {
        reject(Error)
    }
})

console.log(promesa2)

promesa2.then((resolucao) => {
    console.log(resolucao)
})

// Exemplo 4:

// então().então()...O método then()retorna outra Promise. Podemos colocar then() após then() e fazer um encadeamento de promessas. O valor do primeiro argumento de cada então, será o valor do retorno anterior...

const retorno = promesa2.then((resolucao) => {
    console.log(resolucao)
    return 'Teste'
}).then((resolucao) => {
    console.log(resolucao)
})

console.log(retorno)

// Exemplo 5:

// pegar()...O método catch(), do protótipo de Promises, adiciona um callback a uma promessa que será ativada caso a mesma seja rejeitada...

const retorno2 = promesa2.then((resolucao) => {
    console.log(resolucao)
    return 'Teste'
}).then(resolucao => {
    console.log(resolucao)
}).catch(rejeitada => {
    console.log(rejeitada)
})

console.log(retorno2)

// Exemplo 6:

// então(resolver, rejeitar)...Podemos passar a função que será ativada caso a promessa seja rejeitada, direto no método então, como segundo argumento...

const retorno3 = promesa2.then((resolucao) => {
    console.log(resolucao)
    return 'Teste'
}).then(resolucao => {
    console.log(resolucao)
}, rejeitada => {
    console.log(rejeitada)
})

console.log(retorno3)

// Exemplo 7:

// finalmente()...finally()executará a função anônima assim que a promessa acabar. A diferença do final é que ele será executado independente do resultado, seja resolvido ou rejeitado...

const retorno4 = promesa2.then((resolucao) => {
    console.log(resolucao)
    return 'Teste'
}).then(resolucao => {
    console.log(resolucao)
}, rejeitada => {
    console.log(rejeitada)
}).finally(() => {
    console.log('Acabau!')
})

console.log(retorno4)

// Exemplo 8:

// Promise.all()...Retornará uma nova promise assim que todas as promises dentro dela forem resolvidas ou pelo menos uma rejeitada. A reposta é uma array com as respostas de cada promise...

const login = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Usuario Logado')
    })
}, 1000)

const dados = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Dados Carregados')
    })
}, 1500)

const carregouTudo = Promise.all([login, dados])

carregouTudo.then((resolucao) => {
    console.log(resolucao)
})

// Exemplo 9:

// Promise.race()...Retornará uma nova promise assim que a primeira promise for resolvida ou rejeitada. Essa nova promise terá a resposta da primeira resolvida...

const login2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Usuario Logado 1')
    })
}, 1000)

const dados2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Dados Carregados 2')
    })
}, 1500)

const carregouTudo2 = Promise.race([login2, dados2])

carregouTudo2.then((resolucao) => {
    console.log(resolucao)
})