// Retorne o url da página atual utilizando o objeto window

const text = window.document.querySelector('h1')

console.log(text.innerHTML)

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const val = document.querySelector('.valor')

console.log(val)
// Retorne a linguagem do navegador

const ling = navigator.language

console.log(`A linguagem é ${ling}`)

// Retorne a largura da janela 

const larg = window.innerWidth

console.log(`A largura da tela é ${larg}`)