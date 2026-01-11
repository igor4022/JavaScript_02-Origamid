// Exemplo 1:

// ClassList...Retorna uma lista com as classes de elemento. Permite adicionar, remover e verificar se contém...

/*
  add = adicina classes
  remove = remove classes
  toggle = adicona e remove classes
*/

const menu = document.querySelector('.menu')

console.log(menu.classList)

menu.classList.add('ativo')
menu.classList.remove('azul')
menu.classList.toggle('azul')
menu.classList.toggle('azul')

menu.classList.toggle('azul')

if(menu.classList.contains('azul')) {

  menu.classList.add('possui-azul')
} else {

  menu.classList.add('não possui-azul')
}

// Antes era usado 'className' para adicionar classes...

menu.className = menu.className + ' vermelho'

console.log(menu.className)

// Você pode incurtar se quiser usando '+='...

menu.className += ' vermelho'

// Exemplo 2:

// Attributos...Retorna uma array-like com os atributos do elemento...

const animais = document.querySelector('.animais')

console.log(animais.attributes)
console.log(animais.attributes['data-texto'])

// Exemplo 3:

// getAttribute e setAttribute...

// Métodos que retornam ou definem de acordo com o atributo selecionado...

// Exemplo 1:

const img = document.querySelector('img')

console.log(img.getAttribute('src'))

// Exemplo 2:

img.setAttribute('alt', 'É uma raposa')

const srcImg = img.getAttribute('alt')

console.log(srcImg)

// Exemplo 3:

const possuiAlt = img.hasAttribute('alt')

console.log(possuiAlt)

// Exemplo 4:

// Read Only vs Writable...

// Existem propriedades que não permitem a mudança de seus valores, esses são considerados 'Read Only', ou seja, apenas leitura....

const carro = {
  portas: 5,
  andar: function(km) {
    console.log(`Andou ${km}`)
  }
}
