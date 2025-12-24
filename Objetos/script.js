// Exemplo 1:

// Objetos são um conjunto de variáveis e funções, que são chamadas de propriedades e métodos...

var pes = {
    nome: 'Igor',
    idade: 16,

}

console.log(pes)

// Exemplo 2:

// Métodos é uma propriedade que possui uma função no locaç do seu valor...

var drado = {
    lados: 5,
    area: function(lado) {

        return this.lados * lado
    },
    perimetro: function(lado) {

        return lado * 4
    }
}

console.log(drado.perimetro(5))
console.log(drado.area(5))

// Abreviação de 'area: function() {}' para 'area() {}'...

var drado = {
    lados: 5,
    area(lado) {

        return this.lados * lado
    },
    perimetro(lado) {

        return lado * 4
    }
}

console.log(drado.perimetro(5))
console.log(drado.area(5))

// Exemplo 3:

// 'Math' é um objeto nativo de JavaScript. Já percebeu que 'console' é um objeto e 'log()' um método?...

// 'random()' jera um número aléatorio....
// 'PI' mostra o valor de pi 3.14...

var pi = Math.PI

console.log(Math.random())
console.log(pi)

// Exemplo 4:

// Acesse propriedades de um objeto utilizando o ponto '.'

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
    metHeight() {

        return this.height / 2
    }
}

menu.backgroundColor = '#000'
menu.color = 'blue'
menu.esconder = function() {

    console.log('Escondi')
}

var bg = menu.backgroundColor

// Exemplo 5:

// O objeto herda propriedades e métodoas do objeto que foi utilizado para criar o mesmo...

// O metodo 'hasOwnProperty' indentifica se você tem essa propriedade no seu objeto...

var menu = {

    width: 800
}

console.log(menu.hasOwnProperty('width'))
console.log(menu.hasOwnProperty('height'))