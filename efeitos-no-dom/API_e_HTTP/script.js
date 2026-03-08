// Exemplo 1:

//API

//Aplicativo...

//U m servidor, aplicativo, objeto JavaScript ou qualquer outra coisa que você interaja através de comandos. Ao digitar uma URL, estamos utilizando a API do navegador para nos comunicarmos com a API do servidor...

// Programação

// Programação, isso significa que um comando irá encadear uma cadeia de eventos pré-definidos. O resultado esperado é geralmente o mesmo...

// Interface

// A interface são os comandos criados para permitir a interação com a aplicação. Ex: 'VIOLAO'.toLowerCase()é um método que faz parte da interface do objeto String. A interação com a interface retorna um efeito / resposta...

// Exemplo 2:

// Exemplos de APIs
/*
GitHub

https://api.github.com/users/origamid

https://api.github.com/users/origamid/followers

Matriz / Elemento

[].mapa();

[].filtro();

Elemento.classList;

Atributos do elemento;

Tempo

https://www.metaweather.com/api/location/455825/

https://github.com/toddmotto/public-apis

*/

// Exemplo 3:

// HTTP...Hypertext Transfer Protocol é o protocolo utilizado para enviar/receber arquivos e dados na Web...

fetch('https://pokeapi.co/api/v2/pokemon/')
.then(r => r.json())
.then(pokemon => {
  console.log(pokemon)
})

// Exemplo 4:

// url e method...Uma requisição HTTP é feita através de uma URL. O método padrão é o GET, mas existem outros como POST, UPDATE, DELETE, HEADER...

const url = 'https://jsonplaceholder.typicode.com/posts/'
const options = {
    method: 'POST',
    body: '{"title: "JavaScript"}',
    headers: {
        "Ccontent-type": "application/json; charest=utf-8"
    }
}

fetch(url, options)
.then(r => r.json())
.then(json => console.log(json))

// Exemplo 5:

// método
/*

PEGAR / GET

Puxa informação, utilizada para capturar postagens, usuários e etc.

PUBLICAR / POST

Utilizado para criar posts, usuários e etc.

COLOCAR / PUT

Geralmente utilizado para atualizar informações.

EXCLUIR / DELETE

Deleta uma informação.

CABEÇA / HEAD

Puxa apenas os cabeçalhos.

*/

// Exemlo 6:

// PEGAR...GET irá extrair as informações da URL. Não é necessário informar que o método é GET, pois este é o padrão...

const url2 = 'https://jsonplaceholder.typicode.com/posts/';
fetch(url2, {
  method: 'GET'
})
.then(r => r.json())
.then(r => console.log(r))

// Exemplo 7:

// PUBLICAR...POST irá criar uma nova postagem, utilizando o tipo de conteúdo especificado no headers e utilizando o conteúdo do body...

const url3 = 'https://jsonplaceholder.typicode.com/posts/';

fetch(url3, {
  method: 'POST',
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: '{"titulo": "JavaScript"}'
})
.then(r => r.json())
.then(r => console.log(r))

// Exemplo 8:

// COLOCAR...PUT irá atualizar o conteúdo do URL com o que for informado no conteúdo do body...

const url4 = 'https://jsonplaceholder.typicode.com/posts/1/';

fetch(url4, {
  method: 'PUT',
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: '{"titulo": "JavaScript"}'
})
.then(r => r.json())
.then(r => console.log(r))

// Exemplo 9:

// CABEÇA...HEAD puxa apenas os cabeçalhos. É uma requisição mais leve pois não puxa o corpo...

const url5 = 'https://jsonplaceholder.typicode.com/posts/1/';

fetch(url5, {
  method: 'HEAD',
})
.then(response => {
  response.headers.forEach(console.log);
  console.log(response.headers.get('Content-Type'));
});

// Exemplo 10:

// CORS...
// Cross-Origin Resource Sharing, gerencia como deve ser o compartilhamento de recursos entre diferentes origens...

// É definido que nenhum servidor é permitido ou não é permitido o acesso a recursos através de scripts por outros sites. Utilizando o Access-Control-Allow-Origin...

// Se o servidor não permitir o acesso, ele será bloqueado. É possível passar por cima do bloqueio utilizando um proxy...

// CORS é um acordo entre navegador/servidor ou servidor/servidor. Ele serve para dar certa proteção ao navegador, mas não é inviolável...