// Exemplo 1:

// Objeto...Todo objeto é criado com o construtor Object e por isso herda as propriedades e métodos do seu protótipo...

const pessoa = new Object({
    nome: 'Igor'
})

console.log(pessoa)

// Exemplo 2:

// Métodos de Objeto...Object.create(obj, defineProperties)retorna um novo objeto que terá como protótipo o objeto do primeiro argumento...

const carro = {
    marca: 'Marca',
    rodas: 4,
    acelerar() {
        return this.marca + ' acelerou'
    },
    buzinar() {
        return this.marca + ' buzinou'
    }
}

const honda = Object.create(carro)

// Exemplo 3: 

honda.marca = 'Honda'

const carro2 = {
    marca: 'Marca',
    rodas: 4,
    init(valor) {
        this.marca = valor
        return this
    },
    acelerar() {
        return this.marca + ' acelerou'
    },
    buzinar() {
        return this.marca + ' buzinou'
    }
}

const fiat = Object.create(carro2)

fiat.init('Fiat')

const impala = Object.create(carro2).init('Impala')

console.log(impala.acelerar())

// Exemplo 4:

// Objeto.assign()...Object.assign(alvo, obj1, obj2)adicione ao alvo as propriedades e métodos enumeráveis ​​dos demais objetos. O atribua irá modificar o objeto alvo...

const automoveis = {
    acelerar() {
        return 'acelerou'
    },
    buzinar() {
        return 'buzinou'
    }
}

const moto = {
    rodas: 2,
    capacete: true
}

Object.assign(moto, automoveis)

console.log(moto)

// Exemplo 5:

// Objeto.defineProperties()...Object.defineProperties(alvo, propriedades)adicione ao alvo novas propriedades. A diferença aqui é a possibilidade de definir as características dessas propriedades...

/*
    * value => muda o valor de uma propriedade.
    * cofigurable => proibe modificações de um objeto, ou libera configurações, dependo se a resposta for 'true' ou 'false'.
    * wrible: permite que modifique o valor da propriedade ou não, dependendo se sua resposta for 'true' ou 'false'.
*/
const motos = {
    rodas: 2
}

console.log(motos)
motos.rodas = 5;

console.log(moto)

Object.defineProperties(motos, {
    rodas: {
        value: 2,
        configurable: false,
        writable: true
    }
})

motos.rodas = 5

// Exemplo 6:

// obter e definir...É possível definir diferentes comportamentos para obter e definir uma propriedade...
// Lembrando que ao acionarmos uma propriedade obj.propriedade, a função get é ativada e ao definirmos ob.propriedade = 'Valor'a função de set é ativada...

const corsa = {
    cinto: true
}

Object.defineProperties(corsa, {
    rodas: {
        get() {
            this._rodas
        },
        set(valor) {
            this._rodas = valor * 5 + 'Total de Rodas'
        }
    }
})

console.log(corsa)

// Exemplo 7:

// Objeto.getOwnPropertyDescriptors(obj)...Lista todos os métodos e propriedades de um objeto, com suas próprias configurações...

console.log(Object.getOwnPropertyDescriptor(window))
console.log(Object.getOwnPropertyDescriptor(window, 'innerHeigh'))

// Exemplo 8:

// Objeto.chaves(obj), Objeto.valores(obj) Objeto.entradas(obj)...
// Object.keys(obj)retorna uma matriz com as chaves de todas as propriedades diretas e enumeráveis ​​do objeto. Object.values(obj)retorna um array com os valores do objeto. Object.entries(obj)retorna um array com array's contendo a chave e o valor...

console.log(Object.keys(corsa))
console.log(Object.values(corsa))
console.log(Object.entries(corsa))

// Exemplo 9:

// Objeto.getOwnPropertyNames(obj)...Retorna um array com todas as propriedades diretas do objeto (não retorna como o protótipo)...

console.log(Object.getOwnPropertyNames(Array))
console.log(Object.getOwnPropertyNames(Array.prototype))

// Exemplo 10:

// Objeto.getPrototypeOf() e Objeto.is()...
// Object.getPrototypeOf(), retorna o protótipo do objeto. Object.is(obj1, obj2) verifica se os objetos são iguais e retorna verdadeiro ou falso...

const bebida = ['café']

console.log(Object.getPrototypeOf(bebida))

const frutas = ['Banana', 'Uva']
const frutas2 = ['Banana', 'Uva']

console.log(Object.is(frutas, frutas2))

const novaFruta = frutas

console.log(Object.is(novaFruta, frutas))

// Exemplo 11:

// Objeto.congelar(), Objeto.selar(), Objeto.impedirExtensões()...
// Object.freeze()impedir qualquer mudança nas propriedades...
// Object.seal()evite a adição de novas propriedades e impeça que as atuais sejam excluídas...
// Object.preventExtensions()prevenir a adição de novas propriedades...

// Utilizando freeze()...

const kombi = {
    marca: 'Kombi',
    ano: 2009
}

Object.freeze(kombi)

kombi.marca = 'Impala'

console.log(kombi)

// Utilizando seal()...

const impalas = {
    marca: 'Impala',
    ano: 2007
}

Object.seal(impalas)

impalas.marca = 'Fusca'

impalas.porta = 5

console.log(impalas)

delete carro.marca

// Utilizando preventExtensions()...

const fusca = {
    marca: 'Fusca',
    ano: 2011
}

Object.preventExtensions(fusca)

fusca.marca = 'Impala'

fusca.porta = 5

console.log(fusca)

// Propriedades e Métodos do Protótipo... 
// Já que tudo em JavaScript é objeto, as propriedades abaixo estão disponíveis em todos os objetos criados a partir de funções de construtores. {}.constructorretorna uma função construtora do objeto...

// Exemplo 12:

// {}.hasOwnProperty('prop') e {}.propertyIsEnumerable('prop')...
// Verifique se possui a propriedade e retorna true. A propriedade deve ser direta ao objeto e não ao protótipo. O {}.propertyIsEnumerable()cheque se a propriedade é enumerável...

const fruta = ['Banana']

frutas.hasOwnProperty('map')
Array.hasOwnProperty('map')
Array.prototype.hasOwnProperty('map')

Array.prototype.propertyIsEnumerable('map')
window.propertyIsEnumerable('innerHeight')

// Exemplo 13:

// {}.isPrototypeOf(valor)...Verifique se é o protótipo do valor passado.

console.log(Array.prototype.isPrototypeOf(fruta))

// Exemplo 14:

// {}.toString()...Retorna o tipo do objeto. O problema é toString() ser uma função dos protótipos de Array, String e mais. Por isso é comum usarmos a função direta do Object.prototype.toString.call(valor)...

const frutas3 = ['Banana', 'Uva'];
frutas3.toString(); // 'Banana,Uva'
typeof frutas3; // object
Object.prototype.toString.call(frutas); // [object Array]
