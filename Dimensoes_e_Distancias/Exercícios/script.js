// Verifique a distância da primeira imagem
// em relação ao topo da página

const img = document.querySelector('img')
const valor = img.offsetTop

console.log(valor)

// Retorne a soma da largura de todas as imagens

const imagem = document.querySelector('img')
const largura = imagem.offsetLeft

console.log(largura)

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a')

links.forEach((links) => {

    const width = links.offsetLeft
    const height = links.offsetTop
    
    if (width > 48 && height > 48) {

        console.log(links,'Acessivel')
    } else {
        console.log(links,'Não acessivel')
    }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const bowser = document.querySelector('.menu')
const val = window.matchMedia('(max-width: 720px').matches

if (val) {
    bowser.classList.add('menu-mobile')
} else {
    bowser.classList.remove('menu-mobile')
}

console.log(val)