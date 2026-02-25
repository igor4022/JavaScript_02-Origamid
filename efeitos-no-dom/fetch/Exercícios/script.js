// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const cep = document.querySelector('#cep')
const span = document.createElement('div')
const buscar = document.querySelector('.buscar')
const linkCep  = fetch('https://viacep.com.br/ws/${cep}/json/')

linkCep.then((response) => {
    return response.text()
}).then((val) => {
    span.innerHTML = val
    buscar.appendChild(span)
    console.log(span)
})

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const valorBitcoin = fetch('https://blockchain.info/ticker')
const div = document.querySelector('.valor')

valorBitcoin.then((bitcoin) => {
    return bitcoin.text()
}).then((valor) => {
    setTimeout(() => {
        div.innerHTML = valor
    }, 1000);

    console.log(valor)
})

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const piada = fetch('https://api.chucknorris.io/jokes/random')
const contarPiada = document.querySelector('.piadas')
const botao = document.querySelector('.botao')

piada.then((response) => {
    return response.text()
}).then((res) => {
    function botaoClick() {  
            contarPiada.innerText = res
    }

    botao.addEventListener('click', botaoClick)
})