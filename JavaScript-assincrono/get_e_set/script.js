// Exemplo 1:

// Get e Set...Podemos definir comportamentos diferentes de get e set para um método...

const botao = {
    get tamanho() {
        return this._numero || 100
    },
    set tamanho(numero) {
        this._numero = numero * 200
    }
}

// Exemplo 2:

// Set...Eu posso ter um método com conjunto apenas, que modifica outras propriedades do meu objeto...

const frutas = {
    lista:[],
    set nova(fruta) {
        this.lista.push(fruta)
    }
}

frutas.nova = 'Banana'
frutas.nova = 'Uva'

// Exemplo 3:

// Class...Assim como em um objeto, as classes também podem ter métodos de get e set...

class Button {
    constructor(texto, color) {
        this.texto = texto
        this.color = color
    }
    get element() {
        const type = this._elementType || 'button'
        const newButton = document.createElement(type)
        newButton.innerText = this.texto
        newButton.style.color = this.color
        return newButton
    }
    set element(type) {
        this._elementType = type
    }
}

const blueButton = new Button('Comprar', 'blue')

// Exemplo 4:

// Subclasses...É possível criarmos uma subclasse, esta irá ter acesso aos métodos da classe à qual ela se estende através do seu protótipo...

class Veiculo {
    constructor(rodas) {
        this.rodas = rodas
    }
    acelerar() {
        console.log('Acelerou')
    }
}

class Moto extends Veiculo {
    acelerar() {
        console.log('Acelerou rapido')
    }
    empinar() {
        console.log('Moto empinou com ' + this.rodas + ' rodas')
    }
}

const honda = new Moto(2)
const civic = new Veiculo(2)

// Exemplo 5:

// Super...É possível usar a palavra chave superpara falarmos com a classe que pai e acessarmos seus métodos e propriedades...

class Veiculo2 {
    constructor(rodas) {
        this.rodas = rodas
    }
    acelerar() {
        console.log('Acelerou')
    }
}

class Bicicleta extends Veiculo2 {
    acelerar() {
        super.acelerar()
        console.log('Acelerou rapido')
    }
    empinar() {
        console.log('Bicicleta empinou com ' + this.rodas + ' rodas')
    }
}

const bicicleta = new Bicicleta(1)

// Exemplo 6:

// Super e Construtor...Podemos usar o super para estender o método construtor...

class Veiculo3 {
    constructor(rodas) {
        this.rodas = rodas
    }
    acelerar() {
        console.log('Acelerou')
    }
}

class Carro extends Veiculo3 {
    constructor(rodas, combustivel, cinto) {
        super(rodas, combustivel)
        this.cinto = cinto
    }
    acelerar() {
        super.acelerar()
        console.log('Acelerou rapido')
    }
    empinar() {
        console.log('Carro empinou com ' + this.rodas + ' rodas')
    }
}

const carro = new Carro(2, 'Gasolina', true)