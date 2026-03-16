
//Revisão de Aulas

//Função Construtora...Funções responsáveis ​​pela criação de objetos. O conceito de uma função construtora de objetos é implementado em outras linguagens como Classes...

function Button(texto, background) {
    this.texto = texto
    this.background = background
}

Button.prototype.element = function() {
    const newButton = document.createElement('button')
    newButton.innerText = this.texto
    newButton.style.background = this.background
    return newButton
}

const blueButton = new Button('Comprar', 'blue')

console.log(blueButton)

// Exemplo 1:

// Aula...O ES6 trouxe uma nova sintaxe para implementarmos funções construtoras. Agora podemos usar a palavra chave class. É considerado syntactical sugar, pois por baixo dos panos continua utilizado o sistema de protótipos de uma função construtora para criar a classe....

class Button2 {
    constructor(texto, background) {
        this.texto = texto
        this.background = background
    }
    element() {
        const newElemento = document.createElement('button')
        newElemento.innerText = this.texto
        newElemento.style.background = this.background
        return newElemento
    }
}

const redButton = new Button2('Comprar', 'red')

console.log(redButton.element())

// Exemplo 2:

// propriedades...Podemos passar qualquer valor dentro de uma propriedade.

class Button3 {
  constructor(options) {
    this.options = options
  }
}

const greenOptions = {
  backgroundColor: 'green',
  color: 'white',
  text: 'Clique',
  borderRadius: '4px',
}

const greenButton = new Button3(greenOptions)
console.log(greenButton.options)

// Exemplo 3:

// Estático vs. Protótipo...

// Por padrão, todos os métodos criados dentro da classe irão para o protótipo da mesma. Porém podemos criar métodos diretamente na classe utilizando a palavra chave static. Assim como [].map()é um método de um array e Array.from()é um método do construtor Array...

class Button4 {
  constructor(options) {
    this.options = options
  }
  static createButton(texto, background) {
    const buttonElemnt = document.createElement('button')
    buttonElemnt.innerText = texto
    buttonElemnt.style.background = background
    return buttonElemnt
  }
}

const yellowOptions = {
  backgroundColor: 'green',
  color: 'white',
  text: 'Clique',
  borderRadius: '4px',
}

const yellowButton = new Button4(yellowOptions)
const buttonStatic = Button4.createButton('Clique', 'yellow')

console.log(buttonStatic)

// Exemplo 4:

// Estático...Você pode utilizar um método staticpara retornar a própria classe com propriedades já pré definidas...

class Button5 {
    constructor(texto, background, color) {
        this.texto = texto
        this.background = background
        this.color = color
    }
    element() {
        const newElemento = document.createElement('button')
        newElemento.innerText = this.texto
        newElemento.style.background = this.background
        newElemento.style.color = this.color
        return newElemento
    }
    appendTo(target) {
        const targetElement = document.querySelector(target)
        targetElement.appendChild(this.element())
        return targetElement
    }
    static blackButton(texto) {
        return new Button5(texto, 'black', 'white')
    }
}

const blackButton = Button5.blackButton()