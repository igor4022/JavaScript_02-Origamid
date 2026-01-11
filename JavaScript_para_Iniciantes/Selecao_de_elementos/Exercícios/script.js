// Retorne no console todas as imagens do site

const imagens = document.querySelectorAll('img')

console.log(imagens)

// Retorne no console apenas as imagens que começaram com a palavra imagem

const animaisImg = document.querySelectorAll('[src^=imagem]')

console.log(animaisImg)

// Selecione todos os links internos (onde o href começa com #)

const links = document.querySelectorAll('[href^="#"')

console.log(links)

// Selecione o primeiro h2 dentro de .animais-descricao

const texto = document.querySelector('.animais-descricao h2')

console.log(texto)

// Selecione o último p do site

const ultimo = document.querySelector('.copy p')

console.log(ultimo)