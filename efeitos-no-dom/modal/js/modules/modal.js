
export default function initModal() {

    const btnAbrir = document.querySelector('[data-modal="abrir"]')
    const btnFechar = document.querySelector('[data-modal="fechar"]')
    const containerModal = document.querySelector('[data-modal="container"]')


    function abrirModal(event) {
       console.log(event)
    }

    btnAbrir.addEventListener('click', abrirModal)

    function fecharModal() {

    }

    btnFechar.addEventListener('click', fecharModal)

}