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

const contato = document.querySelector('.contato')
const titulo = document.querySelector('titulo')