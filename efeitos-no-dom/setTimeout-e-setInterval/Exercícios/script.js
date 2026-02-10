// Mude a cor da tela para azul e depois para vermelho a cada 2s.

const cor = document.querySelector('[data-cor]')

let i = 0

const tempo = setInterval(() => {
    cor.classList.toggle('ativo')
    if(i > 10) {
        clearInterval(tempo)
    }
}, 1000)

// Crie um cronometro utilizando o setInterval. Deve ser possível

const texto = document.querySelector('p')
const iniciar = document.querySelector('[data-iniciar]')
const pausar =  document.querySelector('[data-pausar]')

let l = 1
let intervalo

function iniciarTime() {
    intervalo = setInterval(() => {
        texto.innerText = l++
        iniciar.setAttribute('disabled', '')
    }, 1000)
}

function pausarTime() {
    clearInterval(intervalo)
    iniciar.removeAttribute('disabled')
}

function resetarTime() {
    texto.innerText = 0
    l = 0
}

iniciar.addEventListener('click', iniciarTime)
pausar.addEventListener('click', pausarTime)
pausar.addEventListener('dblclick', resetarTime)

// iniciar, pausar e resetar (duplo clique no pausar).
