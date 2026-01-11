// Adicione a classe ativo a todos os itens do menu

const menus = document.querySelectorAll('.menu')

menus.forEach((item) => {
  item.classList.add('ativo')
})

console.log(menus)
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

menus.forEach((item) => {

  item.classList.remove('ativo')
})

const menu = document.querySelector('.menu')

menu.classList.add('ativo')

console.log(menu)

// Verifique se as imagens possuem o atributo alt

const img = document.querySelectorAll('img')

img.forEach((item) => {

  console.log(item.hasAttribute('alt'))
})

// Modifique o href do link externo no menu

const href = document.querySelectorAll('.menu [href^="#"]')

href.forEach((item) => {

  item.classList.add('http://www.youtube.com/@meiosirmaos8931')
})

console.log(href)

// Modificando apenas um...

const links = document.querySelector('a[href^="http"]')

links.setAttribute('href', 'http://www.youtube.com/@meiosirmaos8931')

console.log(links)
