// O que muda o texto dependendo da foto que você clicar...

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

// O que faz a lista aparecer e desaparecer...

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

// O que faz a animação de quando voclica em alguams das abas do menu...

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

// O que faz as abas do site aparecerem com uma anmação suave...

function initAnimasaoScroll() {

  const sections = document.querySelectorAll('.js-scroll')
  const windowMetade = window.innerHeight * 0.6

  function animaScroll() {

    sections.forEach((section) => {

      const sectionTop = section.getBoundingClientRect().top - windowMetade
      
      if (sectionTop < 0) {

        section.classList.add('ativo')
      }
    })
  }

  animaScroll()

  window.addEventListener('scroll', animaScroll)
}

initAnimasaoScroll()