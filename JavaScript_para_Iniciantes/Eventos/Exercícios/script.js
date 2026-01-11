// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const links = document.querySelectorAll('a')

function remove(event) {

    console.log(event.preventDefault())
}

links.forEach((link) => {

    link.addEventListener('click', remove)
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const elementos = document.querySelectorAll('body')

function mostra(event) {

    console.log(event.target)
}

elementos.forEach((valor) => {

    valor.addEventListener('click', mostra)
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function retirar(event) {

    console.log(event.target.remove())
}

elementos.forEach((elemento) => {

    elemento.addEventListener('contextmenu', retirar)
}) 

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 


function aumente(event) {

    if (event.key === 't') {

        document.body.style.fontSize = '50px'

    }else if(event.key === 'f'){
        
        document.body.style.fontSize = '10px'
    }
}

    window.addEventListener('keydown', aumente)
    