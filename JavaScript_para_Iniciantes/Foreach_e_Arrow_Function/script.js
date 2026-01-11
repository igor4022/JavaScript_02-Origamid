// Exemplo 1

// ForEach...Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach...

const img = document.querySelectorAll('img')

img.forEach(function(item) {

    console.log(item)
})

// Exemplo 2:

// Parâmetros do forEach...

// O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Essa função pode receber três parâmetros: ValorAtual, index e array...

const imgs = document.querySelectorAll('img')

imgs.forEach(function(item, index, array) {

    console.log(item)
    console.log(index)
    console.log(array)
});

// Exemplo 3:

const imagens = document.querySelectorAll('img')

let i = 0
imagens.forEach(function(item) {

    console.log(i++)
})

// Exemplo 4:

// ForEach e Array...forEach é um método de Array, alguns objetos array-like possuem este métodos. Caso não possua, o ideal é transformá-los em uma array...

const titulos = document.getElementsByClassName('titulo')
const tituloArray = Array.from(titulos)

tituloArray.forEach(function(item, index, array){

    console.log(item, index, array)
} )

// Exemplo 5:

// Arrow Function...Sintaxe curta em relação a 'function ezxpression'. Basta remover a palavra chave function e adicionar a fat arrow '=>' após os argumentos...

const imagem = document.querySelectorAll('img')

imagem.forEach((item, index) => {

    console.log(item, index)
})

// Se você so tiver um argumento você não precisa colocar '()'...

const imagem2 = document.querySelectorAll('img')

imagem2.forEach(item => {

    console.log(item)
})

// Porem se não tiver nem um argumento você necessita de colocar '()'...

const imagem3 = document.querySelectorAll('img')

let val = 0

imagem3.forEach(() => {

    console.log(val++)
})

// Sé o seu código so tiver uma linha você pode simplificalo tirando as '{}'...

const img2 = document.querySelectorAll('img')

let val2 = 0

img2.forEach(() => console.log(i++))