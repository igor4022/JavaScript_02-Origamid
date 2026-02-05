// O que faz as abas do site aparecerem com uma anmação suave...

export default function initAnimasaoScroll() {

  const sections = document.querySelectorAll('.js-scroll')
  if(sections.length) {
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
}