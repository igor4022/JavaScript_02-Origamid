// Exemplo 1:

// [].forEach()...[].forEach(callback(itemAtual, index, array))A função de retorno de chamada é realizada para cada item do array...
// Ela possui três argumentos, itemAtual (valor do item da matriz), índice (índice do valor na matriz) e matriz (array original)...

const carros = ['Ford', 'Fiat', 'Honda']

carros.forEach((item, index, array) => {
    array[index] = 'Teste'
    console.log(item, index, array)
})

console.log(carros)

// Exemplo 2:

// Arraw Function...

const li = document.querySelectorAll('li')

li.forEach(i => i.classList.add('ativa'))
li.forEach((item) => {
    item.classList.add('ativa')
})

// Exemplo 3:

// [].map()...[].map(callback(itemAtual, index, array))funciona da mesma forma que o forEach(), porém ao invés de retornar indefinido, retorna um novo array com valores atualizados de acordo com o retorno de cada iteração...

const car = ['Ford', 'Fiat', 'Honda']

const novaArray = car.map((index) => {
    return index.toUpperCase()
})

console.log(novaArray)

// [].map() com Objetos...O mapa pode ser muito útil para interagirmos com uma matriz de objetos, onde desejamos isolar um valor único de cada objeto...

const aulas = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HYML 2',
        min: 20
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    }
]

const tempoAula = aulas.map(aula => aula.min)

const arrayNomeAulas = aulas.map((aula) => {
    return aula.nome
})

console.log(arrayNomeAulas)
console.log(tempoAula)

// Exemplo 4:

// [].reduce()...[].reduce(callback(acumulador, valorAtual, index, array), valorInicial)executa a função de retorno de chamada para cada item do Array... 
// Um valor especial existe nessa função de callback, ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior...

val = [10, 25, 50]

const recuceAulas = val.reduce((acumulador, item) => {
    console.log(acumulador, item)
    return acumulador + item
})

console.log(recuceAulas)

// Podemos retornar outros valores...

const aulas2 = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    }
]

const listaAulas = aulas2.reduce((acumulador, atual, index) => {
    acumulador[index] = atual.nome
    return acumulador
})

console.log(listaAulas)

// [].reduceRight()...Existe também o método [].reduceRight(), a diferença é que este começa a iterar da direita para a esquerda, enquanto o reduz a itera da esquerda para a direita...

const lista = ['Banana', 'Tangerina', 'Uva']

const  listaAulas2 = lista.reduceRight((acumulador, index) => {
    acumulador[index] = lista
    return acumulador
})

console.log(listaAulas2)

// Exemplo 5:

// [].some()...[].some(), se pelo menos um retorno da iteração for true, ele retorna true...

const frutas = ['Banana', 'Pêra', 'Uva']

const temUva = frutas.some((item) => {
    return item === 'Uva'
})

console.log(temUva)

// Exemplo 6:

// [].every()...[].every(), se todos os retornos das iterações forem verdadeiros, o método retornará verdadeiro. Se pelo menos um for falso, ele irá retornar falso...

const every = frutas.every((item) => {
    return item
})

console.log(every)

const numeros = [7, 10, 15, 25]

const minimoMair = numeros.every((n) => n >= 6) 

console.log(minimoMair)

// Exemplo 7:

// [].find() e [].findIndex()...[].find(), retorna o valor atual da primeira iteração que retorna um valor verdadeiro. Já o [].findIndex(), ao invés de retornar o valor, retorna o índice deste valor na matriz...

const indexUva = frutas.findIndex(item => {
    return item === 'Uva'
})

console.log(indexUva)

const valorUva = frutas.find(item => {
    return item === 'Uva'
})

console.log(valorUva)

// Exemplo 8:

// [].filter()...[].filter(), retorna um array com uma lista de valores que durante sua iteração retornaram um valor verdadeiro...

const elementos = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã']

const arrayFrutas = frutas.filter((item) => {
    return item
})

console.log(arrayFrutas)

// Filtrar em Objetos...

const aulas3 = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    }
]

const numeroMaior = aulas3.filter((aula) => {
    return aula.min >= 15
})

console.log(numeroMaior)