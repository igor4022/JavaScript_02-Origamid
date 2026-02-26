// Exemplo 1

// JSON...JavaScript Object Notation (JSON) é um formato de organização de dados, composto por um conjunto de chave e valor. As aspas duplas são obrigatórias, tanto na chave quanto no valor quando este for uma string...
/*
{
  "id": 1,
  "nome": "Andre",
  "email": "andre@origamid.com"
}
*/

// Exemplo 2:

// Valores...Os valores são números, strings, boolean, arrays, objetos podem e null...
/*
{
  "id": 1,
  "faculdade": true,
  "pertences": [
    "lapis",
    "caneta",
    "caderno"
  ],
  "endereco": {
    "cidade": "Rio de Janeiro",
    "pais": "Brasil"
  },
  "casado": null
}
*/

// Exemplo 3:

// Matrizes e Objetos...É comum possuirmos array's com objetos em cada valor do array. Cuidado para não colocar vírgula no último item do objeto ou array...
/*
[
  {
    id: 1,
    aula: 'JavaScript',
    tempo: '25min',
  },
  {
    id: 2,
    aula: 'HTML',
    tempo: '15min',
  },
  {
    id: 3,
    aula: 'CSS',
    tempo: '10min',
  },
]
*/

// Exemplo 4:

fetch('./dados.json')
.then(r => r.json())
.then((json) => {
    console.log(json[0].aula)
    json.forEach(marteria => {
        console.log(marteria)
    });
})

// Exemplo 5:

// JSON.parse() e JSON.stringify()...JSON.parse()irá transformar um texto JSON em um objeto JavaScript. JSON.stringify()irá transformar um objeto JavaScript em uma string no formato JSON...

fetch('./dados.json')
.then(r => r.text())
.then((jsonText) => {
    const jsonFinal = JSON.parse(jsonText)
    console.log(jsonFinal)
})

// Exemplo Real:

// Podemos salvar por exemplo no localStorage, uma string como valor de uma propriedade. E retorna essa string como um objeto...

const configurasoes = {
    players: 'Google',
    tempo: 25.5,
    aula: "2.1 JavaScript",
}

localStorage.config = JSON.stringify(configurasoes)

console.log(JSON.parse(localStorage.config))