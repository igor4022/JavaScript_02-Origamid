
export default function initTooltip() {
    const tooltip = document.querySelectorAll('[data-tooltip=""]')

    function onMouseOver(event) {
        const toolBox = criarTooltipBox(this)

        onMouseMove.toolBox = toolBox
        this.addEventListener('mousemove', onMouseMove)

        onMouseLeave.toolBox = toolBox
        onMouseLeave.element = this
        this.addEventListener('mouseleave', onMouseLeave)

    }

    const onMouseLeave = {
        handleEvent() {
            this.toolBox.remove()
            this.element.removeEventListener('mouseleave', onMouseLeave)
            this.element.removeEventListener('mousemove', onMouseMove)
        }
    }

    const onMouseMove = {
        handleEvent(event) {
            this.toolBox.style.top = event.pageY + 20 +'px'
            this.toolBox.style.left = event.pageX + 20 + 'px'
        }
    }


    function criarTooltipBox(element) {
        const toolBox = document.createElement('div')
        const text = element.getAttribute('aria-modal')

        toolBox.classList.add('tooltip')
        toolBox.innerText = text
        document.body.appendChild(toolBox)
        return toolBox
    }

    tooltip.forEach((item) => {
        item.addEventListener('mouseover', onMouseOver)
    })
}