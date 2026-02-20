const controles = document.querySelector('#controles')
const cssText = document.querySelector('.css')
const botao = document.querySelector('.btn')

const handleStyle = {
    texto(value) {
        botao.innerText = value
    },
    color(value) {
        botao.style.color = value
    },
    backgroundColor(value) {
        botao.style.backgroundColor = value
    },
    height(value) {
        botao.style.height = value + 'px'
    },
    width(value) {
        botao.style.width = value + 'px'
    },
    border(value) {
        botao.style.border = value
    },
    borderRadius(value) {
        botao.style.borderRadius = value + 'px'
    },
    fontFamily(value) {
        botao.style.fontFamily = value
    },
    fontSize(value) {
        botao.style.fontSize = value + 'px'
    } 
}

function handleChange(event) {
    const name = event.target.name
    const value = event.target.value

    handleStyle[name](value)
    saveValues(name, value)
    showCss()
}

function saveValues(name, value) {
    localStorage[name] = value
}

function setValue() {
    const properties = Object.keys(localStorage)

    properties.forEach((proties) => {
        handleStyle[proties](localStorage[proties])
        controles.elements[proties] = localStorage[proties]
        showCss()
    })
}

setValue()

function showCss() {
    cssText.innerHTML = '<span>' + botao.style.cssText.split('; ').join(';</span><span>')
}

controles.addEventListener('change', handleChange)