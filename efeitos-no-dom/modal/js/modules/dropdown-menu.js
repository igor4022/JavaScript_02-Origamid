export default function initDropdownMenu() {

    const dropDown = document.querySelectorAll('[data-dropdown]')

    function onMouseClick(event) {
        event.preventDefault()
        this.classList.add('ativo')
        offMouseCLick(this, ['touchestart', 'click'], () => {
            this.classList.remove('ativo')
        })
    }

    function offMouseCLick(element, events, callback) {
        const html = document.documentElement
        const outside = 'data-outside'

        if(!element.hasAttribute(outside)) {
            events.forEach(user => {
                html.addEventListener('click', offOutsideClick)
            })
            element.setAttribute(outside, '')
        }

        function offOutsideClick(event) {
            if(!element.contains(event.target)) {
                element.removeAttribute(outside)
                html.removeEventListener('click', offOutsideClick)
                callback()
            }
        }
    }
    
    dropDown.forEach((menu) => {
        menu.addEventListener('click', onMouseClick)
        menu.addEventListener('touchstart', onMouseClick)
    })
}