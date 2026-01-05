// Exemplo 1:

// Adiciona uma função ao elemento, esta chamada 'callback'. Que será atividade assim que certo'evento' ocorrer neste elemento...

const img = document.querySelector('img')

img.addEventListener('click', function() {

    console.log('Clicou')
})

// Também pode simplificar...

const imagem = document.querySelector('img')

imagem.addEventListener('click', () => {

    console.log('clicou')
})

// Exemplo 2:

// Callbck...É boa para prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima...

img2 = document.querySelector('img')

function callback() {

    console.log('click')
}

img.addEventListener('click', callback)

// Exemplo 3:

// Event...O primeiro parâmetro do callback é referente ao evento que ocorreu...

imagem2 = document.querySelector('img')

function callback(event) {
    console.log(event)
}

imagem2.addEventListener('click', callback)

// Exemplo 4:

// Propriedades do Event...
/*
 
 currentTarget = mostra o elemento em si
 target = mostra o elemto em que você clicou
 type = verifica o evento
 pafy = verifica o caminho

*/

const imagens = document.querySelector('.animais-lista')

function callbackLista(event) {

    console.log(event.currentTarget)
    console.log(event.target)
    console.log(event.type)
    console.log(event.pafy)
}

imagens.addEventListener('click', callbackLista)

console.log(imagens)

// Exemplo 5:

// event.preventDefault() = Previna o padrão do meu elemento...

// Previne o comportamento padrão do evento no bowser. No caso de um link externo, por exemplo, irá previnir que o link seja ativado...

const link = document.querySelector('a[href^="http"]')

function linkClick(event) {
    
    event.preventDefault()
    console.log('Clicou blz')
}

link.addEventListener('click', linkClick)

// Exemplo 6:

// This...A palavra chave 'this' é uma palavra especial de JavaScript, que pode fazer referência a diferentes objetos dependendo do contexto. NO caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado...

const valor = document.querySelector('a[href^="http"')

function valorThis() {
    console.log(this.getAttribute('href'))
}

valor.addEventListener('click', valorThis)

// Exemplo 7:

// Diferentes Eventos...

// Existem diversos eventos como 'click, scroll, resize, keydown, keyup, mouseenter' e mais. Eventos podem ser adicionados a diferentes elementos, como o 'window' e 'document' também...

const h1 = document.querySelector('h1')

function clicar(event) {

    console.log(event.type, event)
}

/*1.addEventListener('click', clicar)
h1.addEventListener('mouseenter', clicar)
h1.addEventListener('mousemove', clicar)
window.addEventListener('scroll', clicar)
window.addEventListener('resize', clicar)
//window.addEventListener('keydown', clicar)*/

// Exemplo 8:

// Keyboard...Você pode adicionar atalhos para facilitar a navegação no seu site, através de eventos do 'keyboard'...

function botao(event) {

    if (event.key === 'f') {

        document.body.classList.toggle('fullscren')
    }
}

window.addEventListener('keydown', botao)