// O que muda o texto dependendo do que você clicar...

function initTabMav() {

  const tabMenu = document.querySelectorAll('.js-tabmenu li')
  const tabContent = document.querySelectorAll('.js-tabcontent section')

  function activeTab(index) {
    tabContent.forEach((content) => {
      content.classList.remove('ativo')
    })
    tabContent[index].classList.add('ativo')
  }

  tabMenu.forEach((itemMenu, index) => {

    itemMenu.addEventListener('click', () => {
      activeTab(index)
    })
  })
}

initTabMav()

function initAcordion() {

  const accordionList = document.querySelectorAll('.js-accordion dt')
  const classAtivo = 'ativo'

  function activeAcordion(event) {

    this.classList.toggle((classAtivo))
    this.nextElementSibling.classList.toggle(classAtivo)
  }

  accordionList.forEach((item) => {

    item.addEventListener('click', activeAcordion)
  })
}

initAcordion()

function initScrollSuave() {

  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"')

  function scrollToSection(event) {

    event.preventDefault()
    
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })

    /*const topo = section.offsetTop

    window.scrollTo({
      top: topo,
      behavior: 'smooth'
    })*/

  }


  linksInternos.forEach((link) => {
    
    link.addEventListener('click', scrollToSection)
  }) 
}

initScrollSuave()