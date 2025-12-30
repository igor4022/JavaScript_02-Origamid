// Exemplo 1

// ForEach...Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach...

const img = document.querySelectorAll('img')

img.forEach(function(item) {

    console.log(item)
})

// Exemplo 2:

// Parâmetros do forEach...

// O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Essa função pode receber três parâmetros: ValorAtual, index e array...

const imgs = document.querySelector('img')

imgs.forEach(function(ValorAtual, index, array) {

    console.log(item)
    console.log(index)
    console.log(array)
});