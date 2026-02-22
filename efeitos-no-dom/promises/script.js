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

console.log(promesa)

promesa2.then((resolucao) => {
    console.log(resolucao)
})