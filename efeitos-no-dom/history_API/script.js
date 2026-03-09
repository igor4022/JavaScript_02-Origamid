// Exemplo 1:

// História...É possível acessarmos o histórico de acesso do navegador em uma sessão específica através do window.history. O histórico do objeto possui diferentes métodos e propriedades...

window.history;
window.history.back() // vai para a anterior
window.history.forward() // vai para a próxima

// Exemplo 2:

// pushState()...A parte interessante de manipularmos a história é que podemos modificar o histórico e adicionar um novo item. window.history.pushState(obj, title, url)...

window.history.pushState(null, null, 'teste.html')

// Exemplo 3:

// estado pop...O evento popstate pode ser adicionado ao objeto window. Assim podemos executar uma função toda vez que o usuário clicar no botão de voltar ou próximo...

window.history.pushState(null, null, 'sobre.html')

window.addEventListener('popstate', () => {
    console.log('Teste')
})

// Exemplo 4:

// Obter histórico...Ao extrairmos dados via fetch api, o url da página continua o mesmo. Ao combinar fetch com o histórico api conseguimos simular uma navegação real entre páginas, sem a necessidade de recarregar da mesma...

const links = document.querySelectorAll('a')

function clickLink(event) {
    event.preventDefault()
    puxarPagina(event.target.href)
    window.history.pushState(null, null, event.target.href)
}

async function puxarPagina(url) {
    document.querySelector('.content').innerHTML = 'Carregando'
    const pageResponse = await fetch(url)
    const pageText =  await pageResponse.text()
    replaceContent(pageText)
}

function replaceContent(newText) {
    const newHtml = document.createElement('div')
    newHtml.innerHTML = newText

    const oldContent = document.querySelector('.content')
    const newContent = newHtml.querySelector('.content')

    oldContent.innerHTML = newContent.innerHTML
    document.title = newHtml.querySelector('title').innerText
}

window.addEventListener('popState', () => {
    puxarPagina(window.location.href)
})

links.forEach(link => {
    link.addEventListener('click', clickLink)
})