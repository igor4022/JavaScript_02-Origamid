// Exemplo 1:

// API Fetch...Permite fazer requisições HTTP através do método fetch(). Este método retorna a resolução de uma promessa. Podemos então usar o then para interagirmos com a resposta, que é um objeto do tipo Response...

const doc = fetch('./doc.txt')

doc.then(resolucao => {
    console.log(resolucao)
})

// Exemplo 2:

// Resposta...O objeto Response possui um corpo com o conteúdo da resposta. Esse corpo pode ser transformado utilizando métodos do protótipo do objeto Response. Estes retornam outras promessas...

doc.then((resolucao) => {
    return resolucao.text()
    }).then((body) => {
        console.log(body)
})

// Ou...

const doc2 = fetch('./doc.txt')

doc2.then((resolucao) => {
    resolucao.text().then((body) => {
        console.log(body)
    })
})

// Exemplo:

const doc3 = fetch('./doc.txt')

doc3.then((resolucao) => {
    return resolucao.text()
    }).then((body) => {
        const conteudo = document.querySelector('.conteudo')
        conteudo.innerText = body
        console.log(body)
})

// Ou...
// É bem comum ver um código escrito assim...

const doc4 = fetch('./doc.txt')

doc4.then(resolucao => resolucao.text()).then(body => {
    const conteudo = document.querySelector('.conteudo')
    conteudo.innerText = body
    console.log(body)
})

// Exemplo 3:

// .json()...Um tipo de formato de dados muito utilizado com JavaScript é o JSON(JavaScript Object Notation), pelo fato dele possuir basicamente a mesma sintaxe que a de um objeto js. .json()transforma um corpo em json em um objeto JavaScript...

const doc5 = fetch('https://viacep.com.br/ws/01001000/json/')

doc5.then((resolucao) => {
    return resolucao.json()
}).then((body) => {
    const conteudo = document.querySelector('.conteudo')
    conteudo.innerText = body
    console.log(body)
})

// Exemplo 4: 

// .texto()...Podemos usar o .text() para diferentes formatos como txt, json, html, css, js e mais...

const cep = fetch('./style.css')

cep.then((resolucao) => {
    return resolucao.json()
}).then((body) => {
    const conteudo = document.querySelector('.conteudo')
    const style = document.createElement('style')
    style.innerHTML = body
    conteudo.appendChild(style)
})

// Exemplo 5:

// HTML e .texto()...Podemos pegar um arquivo inteiro em HTML, transformar o corpo em texto e inserir em uma div com o innerHTML. A partir daí podemos manipular esses dados como um DOM qualquer...

const sobre = fetch('./sobre.html')
const div  = document.createElement('div')

sobre.then((resolucao) => {
    return resolucao.text()
}).then((body) => {
    console.log(body)
    div.innerHTML = body
    const titulo = div.querySelector('h1')
    document.querySelector('h1').innerText = titulo.innerText
    console.log(titulo)
})

// Exemplo 6:

// .blob()...Um blob é um tipo de objeto utilizado para representação de dados de um arquivo. O blob pode ser utilizado para transformar requisições de imagens por exemplo. O blob gera um URL único...

const imagem = fetch('./Pessoa.png')

imagem.then((resolucao) => {
    return resolucao.blob()
}).then((body) => {
    const bloUrl = URL.createObjectURL(body)
    const imagemDom = document.querySelector('img')
    imagemDom.src = bloUrl
})

// Exemplo 7:

// .clone()...Ao utilizarmos os métodos acima, text, json e blob, a resposta é modificada. Por isso existe o método clone, caso você precise transformar uma resposta em valores diferentes...

const doc7 = fetch('https://viacep.com.br/ws/01001000/json/')

doc7.then((resolucao) => {
    const r2 = resolucao.clone()
    resolucao.text() .then((text) => {
        console.log(resolucao)
    })
    r2.json() .then((json) => {
        console.log(json)
    })
}).then((body) => {
   console.log(body)
})

// Exemplo 8:

// .cabeçalhos...É uma propriedade que possui os cabeçalhos da requisição. É um tipo de dado iterável, então podemos usar o forEach para ver cada um deles...

const doc8 = fetch('https://viacep.com.br/ws/01001000/json/')

doc8.then((response) => {
   console.log(response)
   response.headers.forEach((res) => {
    console.log(res)
   })
})

// Exemplo 9:

// .status e .ok...Retorna o status da requisição. Veja foi 404, 200, 202 e mais. ok retorna um valor booleano sendo true para uma requisição de sucesso e false para uma sem sucesso...

const docs = fetch('./docs.txt')

docs.then((response) => {
   console.log(response.status)
   
   if(response.status === 404) {
    console.log('Página não existe...')
   }
})

// Exemplo 10:

// .url e .tipo...urlretorna a url da requisição. .typeretorna o tipo de resposta...

const div2 = document.createElement('div');

const docs2 = fetch('https://viacep.com.br/ws/01001000/json/')

docs2.then(response => {
  console.log(response.type, response.url);
});

//types
// basic: feito na mesma origem
// cors: feito em url body pode estar disponível
// error: erro de conexão
// opaque: no-cors, não permite acesso de outros