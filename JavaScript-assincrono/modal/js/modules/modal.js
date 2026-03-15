
export default function initModal() {

    const btnAbrir = document.querySelector('[data-modal="abrir"]')
    const btnFechar = document.querySelector('[data-modal="fechar"]')
    const containerModal = document.querySelector('[data-modal="container"]')

    if(btnAbrir && btnFechar && containerModal) {

        function abrirModal(event) {
        event.preventDefault()
        containerModal.classList.add('ativo')
        }

        function fecharModal() {
            containerModal.classList.remove('ativo')
        }

        function fecharForModal(event) {
            if(event.target === this) {
                fecharModal(this)
            }
        }
        btnAbrir.addEventListener('click', abrirModal)
        btnFechar.addEventListener('click', fecharModal)
        containerModal.addEventListener('click', fecharForModal)
    }
}