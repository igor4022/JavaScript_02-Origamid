export default function outsideClick(element, events, callback) {

    const html = document.documentElement
    const outside = 'data-outside'

    if(!element.hasAttribute(outside)) {
        events.forEach(user => {
            setTimeout(() => html.addEventListener(user, offOutsideClick))
        })
        element.setAttribute(outside, '')
    }

    function offOutsideClick(event) {
        if(!element.contains(event.target)) {
            element.removeAttribute(outside)
            events.forEach(user => {
                html.removeEventListener(user, offOutsideClick)
            })
            callback()
        }
    }
    
}