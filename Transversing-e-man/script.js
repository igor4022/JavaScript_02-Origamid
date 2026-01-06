// Exemplo 1:

// OuterHTML, innerHTML e innerText...

// Propriedades que retornam uma string contendo o html ou texto. É possível artribuir um novo valor para as mesmas 'element.innerText = "Novo Texto"'...

const h1 = document.querySelector('h1')
const animais = document.querySelector('.animais-lista')

h1.innerHTML

console.log(animais.outerHTML)
console.log(animais.innerHTML)
console.log(animais.innerText)

// Exemplo 2:

// Transversing...Como navegador pelo DOM, utilizando suas propriedades e métodos...

/*
  parentElement = pega o elemento
  nextElementSibling = pega o proximo elemento
  previousElementSibling = pega o elemento anterior
 */

const lista = document.querySelector('.animais-lista')

console.log(lista.parentElement)
console.log(lista.nextElementSibling)
console.log(lista.previousElementSibling)
console.log(lista.children)

// Exemplo 3

// Element´s representam um elemento html, ou seja, uma tag. Node representa um nó, e pode ser um elemento (Element), texto, comentário, quebra de linha e mais...

console.log(lista.childNodes)
console.log(lista.previousSibling)

// Exemplo 4:

// Manipulando Elementos...É possível mover elementos no dom com métodos de Node...

const anima = document.querySelector('.animais')
const contato = document.querySelector('.contato')
const titulo = contato.querySelector('.titulo')
const mapa = document.querySelector('.mapa')

lista.appendChild(titulo)
animais.appendChild(titulo)
contato.insertBefore(animais, mapa)
contato.removeChild(mapa)
// contato.replaceChild(lista)

// Exemplo 5:

// Novos Elementos...Podemos criar novos elementos com o método 'createElement()'

const novoH1 = document.createElement('h1')

novoH1.innerHTML = 'Novo Título'
novoH1.classList.add('titulo')

titulo.appendChild(novoH1)

console.log(novoH1)

// Exemplo 6:

// Clonar elementos...Todo elemento selecionado é único. Para criarmos um novo elemento baseado no anterior, é necessário utilizar o método 'cloneNode()'

const valH1 = document.querySelector('h1')
const faq = document.querySelector('.faq')
const cloneH1 = h1.cloneNode(true)

cloneH1.classList.add('vermelho')

faq.appendChild(cloneH1)