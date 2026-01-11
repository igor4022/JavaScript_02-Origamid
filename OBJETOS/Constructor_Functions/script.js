// Exemplo 1:

// Criar um objeto é simples, basta definirmos uma variável e iniciar a definição do seu valor com chaves {}...

// Mas e se precisarmos criar um novo objeto, com as mesmas características do anterior...

const carro = {
    marca: 'Marca',
    preso: 0,
}

const honda = carro
honda.marca = 'Honda'
honda.preso = 2000

const fiat = carro
honda.marca = 'fiat'
honda.preso = 3000

// Exemplo 2:

// Constructor Functions...

// Para isso existem as Constructor Functions, ou seja, Funções Construtoras que são responsáveis por construir novos objetos sempre que chamamos a mesma...

function Carro() {

    this.marca = 'Marca'
    this.preso = 2000
}

const honda2 = new Carro()
honda2.andar = () => {
    console.log('Andou')
}
const fiat2 = new Carro()
fiat2.marca = 'Fiat'

// Exemplo 3:

// New Keyword...A palavra chave 'new' é responsável por criar um novo objeto baseado na função que passarmos a frente dela...

function Carro2(marcaAtribuida, presoAtribuido) {

    this.marca = marcaAtribuida
    this.preso = presoAtribuido
}

const honda3= new Carro2('Honda', 2000)
const fiat3 = new Carro2('Fiat', 3000)
