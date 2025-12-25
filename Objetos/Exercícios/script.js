// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var dados = {
    nome: 'Igor',
    sobre: 'Maciel',



// Crie um método no objeto anterior, que mostre o seu nome completo
    resul: 'Igor' + ' ' +  'Maciel',
    valor() {

    return this.nome + ' ' + this.sobre
  }
}

dados.val = function() {

    return this.nome + ' ' + this.sobre
}

console.log(dados.resul)
console.log(dados.valor())
console.log(dados.val())


// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 3000,
  portas: 4,
  marca: 'Audi',
}

console.log(carro.preco)

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
    nome: 'labrador',
    cor: '#000',
    idade: 10,
    late() {
        return 'AU! AU! AU!'
    }
}

console.log(cachorro.nome)
console.log(cachorro.cor)
console.log(cachorro.idade)
console.log(cachorro.late())