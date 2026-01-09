// Duplique o menu e adicione ele em copy

const menu = document.createElement('h1')
const copy = document.querySelector('.copy')

menu.innerHTML = 'Texto'

copy.appendChild(menu)

console.log(menu)

// Selecione o primeiro DT da dl de Faq

const lista = document.querySelectorAll('dl[class^="faq-lista]')

console.log(lista.previusElement)

// Selecione o DD referente ao primeiro DT

const lista2 = document.querySelector('dt')

console.log(lista2.nextElementSibling)

// Substitua o conteúdo html de .faq pelo de .animais

const faq = document.querySelector('.faq-lista')
const animais = document.querySelector('.animais')

faq.appendChild(animais)