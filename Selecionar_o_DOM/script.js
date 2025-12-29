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

console.log(linksInternos.href)

// Exemplo 4:

// Seletor Geral Lista...'guerySelectorAll' retorna todos os elementos compatíveis com o seletor CSS em uma NodeList...

const animaisImg