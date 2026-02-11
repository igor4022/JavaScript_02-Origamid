import outsideClick from "./outside-click.js";

export default function initMenuMobile() {

    const menu = document.querySelector('[data-menu="button"]')
    const lista = document.querySelector('[data-menu="list"]')
    const eventos = ['click', 'touchstart']

    function openMenu(event) {
        menu.classList.add('ativo')
        lista.classList.add('ativo')
        outsideClick(lista, eventos, () => {
            menu.classList.remove('ativo')
            lista.classList.remove('ativo')
        })
    }

    eventos.forEach((evento) => {
        menu.addEventListener(evento, openMenu)
    })
}