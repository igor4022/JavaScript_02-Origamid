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