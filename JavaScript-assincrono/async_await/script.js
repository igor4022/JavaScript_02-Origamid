// Exemplo 1:

// assíncrono / aguardar...A palavra chave asyncindica que a função possui partes assíncronas e que você pretende esperar a resolução da mesma antes de continuar. O wait indicará uma promessa que devemos esperar. Faz parte do ES8...

async function puxarDados() {
    const responseDados = await fetch('./dados.json')
    const jsonDados = await responseDados.json()

    document.body.innerText = jsonDados.aula
}

puxarDados()

// Exemplo 2:

// então / assíncrono...A diferença é uma sintaxe mais limpa...

function iniciarFetch() {
  fetch('./dados.json')
  .then(dadosResponse => dadosResponse.json())
  .then(dadosJSON => {
    document.body.innerText = dadosJSON.titulo;
  })
}
iniciarFetch();

async function iniciarAsync() {
  const dadosResponse = await fetch('./dados.json');
  const dadosJSON = await dadosResponse.json();
  document.body.innerText = dadosJSON.titulo;
}
iniciarAsync();

// Exemplo 3:

// Tentar/Pegar...Para lidarmos com erros nas promessas, podemos usar o trye o catchna função...

async function puxarValor() {
    try {
        const responseDados = await fetch('./dados.json')
        const jsonDados = await responseDados.json()
        document.body.innerText = jsonDados.aula
    } catch(erro) {
        console.log(erro)
    }
}

puxarValor()

// Exemplo 4:

// Iniciar Fetch ao Mesmo Tempo....Não precisamos esperar uma busca para começarmos outro. Porém precisamos esperar a resposta resolvida do fetch para transformarmos a resposta em json...

async function puxarResultado() {
    const responseDados = fetch('./dados.json')
    const responseClientes = fetch('./clientes.json')
    const jsonDados = await (await responseDados).json()
    const jsonClientes = await (await responseClientes).json()
}

puxarResultado()

// Exemplo 5:

// Promessa...O resultado da expressão à frente de await tem que ser uma promessa. E o retorno do await será sempre o resultado desta promessa...

async function asyncSemPromise() {
  // Console não irá esperar.
  await setTimeout(() => console.log('Depois de 1s'), 1000);
  console.log('acabou');
}
asyncSemPromise();

async function iniciarAsync() {
  await new Promise(resolve => {
    setTimeout(() => resolve(), 1000)
  });
  console.log('Depois de 1s');
}
iniciarAsync();