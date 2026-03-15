// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.

const secao = document.querySelectorAll('section')

secao.forEach((sec) => {
    sec.dataset.anime = "show-right"
    sec.dataset.anime = "show-down"

    console.log(sec.dataset)
})


// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)

/*function adicinarNome() {
    secao.forEach((sec) => {
        sec.dataset.anime = "show-right"
    })
}

window.addEventListener('scroll', adicinarNome)*/

// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita

function adicinarNomeTop() {
    secao.forEach((sec) => {
        sec.dataset.anime = "show-right2"
        sec.scroll({
            top: 100,
            behavior: "smooth",
        });
    })
}

window.addEventListener('scroll', adicinarNomeTop)

function adicinarNomeLeft() {
    secao.forEach((sec) => {
        sec.dataset.anime = "show-left2"
        sec.scroll({
            left: 100,
            behavior: "smooth",
        });
    })
}

window.addEventListener('scroll', adicinarNomeLeft)


// Substitua todas as classes js- por data atributes.

const js = document.querySelectorAll('.js-scroll')

secao.forEach((sec) => {
    sec.dataset.subistitue = "js"
    sec.classList.remove('js-scroll')
})