// Exemplo 1:

// Document Object Model(DOM)...

// É uma interface que representa documento HTML e XML através de objetos...

// Com ele é possível manipular a estrutura, estilo e conteúdo destes documentos...

// window.alert('Olá Mundo!') 

const href = window.location.href

console.log(href)

// Exemplo 2:

// Window e Document...São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades...

const selH1 = document.querySelector('h1')

// Exemplo 3:

// Node...Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e proptiedades...

// Element é um tipo de objeto Node...

const clasH1 = selH1.classList

selH1.addEventListener('click', function() {

    console.log('Clicou em ', selH1.innerText)
})