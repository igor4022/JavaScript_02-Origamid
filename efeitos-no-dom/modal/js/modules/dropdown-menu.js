export default function initDropdownMenu() {

    const dropDown = document.querySelector('[data-dropdown]')
    const menu = document.querySelector('[data-dropdown]ul')

    function onMouseClick() {
        menu.classList.add('dropdown-menu')
    }

    dropDown.addEventListener('mouseover', onMouseClick)
}