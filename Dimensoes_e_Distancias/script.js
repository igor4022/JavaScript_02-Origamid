// Exemplo 1:

// Height e Width...Estas são propriedades e métodos dos objetos 'Element' e 'HTMLElement', a maioria delas são 'Read Only'...

const listaAnimais = document.querySelector('.animais-lista')
const height = listaAnimais.scrollHeight

console.log(height)

// Exemplo 2:

// offsetTop e offsetLeft...

/* 
  offsetTop = Distância entre o topo do elemento e o topo da página...

  offsetLeft = Distância entre o canto esqurdo do elemento...
  E o canto esquerdo da página...
*/

const animaisTop = listaAnimais.offsetTop

console.log(animaisTop)

const raposaH2 = document.querySelector('h2')
const h2Lesft = raposaH2.offsetLeft

console.log(h2Lesft)

// Exemplo 3:

// GetBoundinClientRect()...

// Método que retorna um objeto com valores de width, height, distâncias do elemento e mais...

const rect = raposaH2.getBoundingClientRect()

console.log(rect)

// Exemplo 4:

// Window...

/*
    window.innerWidth = width do janela
    window.outerWidth = soma dev tools também
    window.innerHeight = height do janela
    window.outerHeight = soma a barra de endereço
    window.pageYOffset = distância total do scroll vertical
    window.pageXOffset = distância total do scroll horizontal
*/

console.log(
    window.innerWidth,
    window.innerHeight,
    window.outerWidth,
    window.outerHeight,
    window.pageYOffset,
)

if(rect.top < 0) {

    console.log('Passou do elemento')
}

// Exemplo 5:

// MatchMedia()...Utilize um media-querie como no CSS para verificar a largura do browser...

const small = window.matchMedia('(max-width: 700px)').matches

if (small){

    console.log('Usando celular')
} else {

    console.log('Usando notbook ou tablete')
}