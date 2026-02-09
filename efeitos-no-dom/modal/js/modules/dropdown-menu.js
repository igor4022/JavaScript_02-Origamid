export default function initDropdownMenu() {

    const dropDown = document.querySelectorAll('[data-dropdown]')

    function onMouseClick(event) {
        event.preventDefault()
        this.classList.toggle('ativo')
    }
    
    dropDown.forEach((menu) => {
        menu.addEventListener('click', onMouseClick)
        menu.addEventListener('touchstart', onMouseClick)
    })
}