// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const inputCep = document.querySelector('#cep')
const span = document.querySelector('.span')
const buscar = document.querySelector('.buscar')

buscar.addEventListener('click', clickBtn)

function clickBtn(event) {
    event.preventDefault()
    const cep = inputCep.value
    valorFinal(cep)

}

function valorFinal(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)

    .then((response) => {
        return response.text() 
    }).then((val) => {
        span.innerText = val
        console.log(span)
    })
}


// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const valorBitcoin = fetch('https://blockchain.info/ticker')
const div = document.querySelector('.valor')

valorBitcoin.then((bitcoin) => {
    return bitcoin.json()
}).then((valor) => {
    setInterval(() => {
        div.innerHTML = valor.BRL.buy
    }, 30000);

    console.log(valor)s
})

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chu cknorris, toda vez que
// clicar em próxima

const contarPiada = document.querySelector('.piadas')
const botao = document.querySelector('.botao')

function botaoClick(event) {
    event.preventDefault()

    fetch('https://api.chucknorris.io/jokes/random')

    .then((response) => {
        return response.text()
    }).then((res) => {
            contarPiada.innerText = res
        })
}

 botao.addEventListener('click', botaoClick)