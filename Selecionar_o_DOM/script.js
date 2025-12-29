// Exemplo 1:

// 'getElementById' seleciona e retorna elemento do DOM...

// Retorna apenas IDs...

const animais = document.getElementById('animais')

console.log(animais)

// Exemmplo 2:

// Class e Tag...'getElementsByClassName' e 'getElementsByTagName' selecionam e retornam uma lista de elementos do DOM...

//  A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticaente atualizada...

const gridSection = document.getElementsByClassName('grid-section')

console.log(gridSection[1])

// Exemplo 3:

// Seletor Geral Único...'querySelector' retorna o primeiro elemento que combinar com o seu seletor CSS...

const primeiraLi = document.querySelector('li')

console.log(primeiraLi)

const primeiraUl = document.querySelector('ul')

console.log(primeiraUl)

const linksInternos = document.querySelector('[href^="#"]')

console.log(linksInternos)

// Exemplo 4:

// Seletor Geral Lista...'guerySelectorAll' retorna todos os elementos compatíveis com o seletor CSS em uma NodeList...

const animaisImg = document.querySelectorAll('.animais img')

console.log(animaisImg)

// Exemplo 5:

// HTMLAllCollection vs NodeList...

// A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática...

const gridSectionHTML = document.getElementsByClassName('grid-section')
const gridSectionNode = document.querySelectorAll('.grid-section')

primeiraUl

console.log(gridSectionHTML)
console.log(gridSectionNode)