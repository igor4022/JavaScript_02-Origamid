// Exemplo 1:

// Função...Toda função é criada com o construtor Function e por isso herda as suas propriedades e métodos...

// const perimetro = new Function('lado', 'retorna lado * 5')

// Exemplo 2:

// propriedades...Function.lengthretorna o total de argumentos da função. Function.nameretorna uma string com o nome da função...

function somar(n1, n2) {
    return n1 + n2
}

console.log(somar.length)
console.log(somar.name)

// Exemplo 3:

// função.call()...function.call(this, arg1, arg2, ...)executa a função, sendo possível passarmos uma nova referência ao thisda mesma...

function darOi(nome) {
    console.log('Oi para para você ' + nome)
}

darOi.call({}, 'Igor')

function descrisaoCarro() {
    console.log(this)
    console.log(this.marca + ' ' + this.ano)
}

descrisaoCarro.call({marca:'Honda', ano: 2015})

// Exemplo 4:

// Call...O valor disso faz referência ao objeto criado durante a construção do objeto (Função Construtora). Podemos trocar uma referência do método ao this, utilizando o call()...


const carros = ['Ford', 'Fiat', 'VW']
const frutas = ['Banana', 'Uva', 'Pêra']

frutas.forEach((item) => {
    console.log(item)
})

// Exemplo 5:

// função.aplicar()...O apply(this, [arg1, arg2, ...])funcionamento como o call, a única diferença é que os argumentos da função são passados ​​através de um array...

const numeros = [1, 2, 3, 4, 5]
console.log(Math.max.apply(null, numeros))

// Exemplo 6:

// função.bind()...Diferente de call e apply, bind(this, arg1, arg2, ...)não irá executar a função mas sim retornar a mesma com o novo contexto deste...

const $ = document.querySelectorAll.bind(document)
