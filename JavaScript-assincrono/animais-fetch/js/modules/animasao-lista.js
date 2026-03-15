// O que faz a lista aparecer e desaparecer...

export default function initAcordion() {

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