// Exemplo Real...

// Quando mudamos a propriedade seletor, o objeto Dom irá passar a selecionar o novo seletor em seus métodos...

/*
  const Dom = {
    seletor: 'li',
    element() {
        return document.querySelector(this.seletor)
    },
    ativar() {
        this.element().classList.add('ativar')
    }
}

Dom.ativar()
Dom.seletor = 'ul'
Dom.ativar()
*/

function Dom(seletor) {
    this.seletor = seletor
    this.element = function() {
        return document.querySelector(seletor)
    }
    this.ativar = function() {
        this.element().classList.add('ativar')
    }
}

const li = new Dom('li')
const ul = new Dom('ul')