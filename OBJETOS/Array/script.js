// Exemplo 1:

// Arrays armazenam uma coleção de elementos. Estes podem ser strings, arrays, boolean, number, functions, objects e mais...

const instrumentos = ['Guitarra', 'Baixa', 'Vilão']
const precos = [50, 100, 150]

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul'}], function andar(anda) { console.log(anda)}]

// Exemplo 2:

// Toda Array herdea os métodos e propriedades do protótipo do construtor Array...

const carro = new Array('Ford','Fiat', 'Honda')

carro[2] = 'Ferrari'
carro[3] = 'Kia'
carro[20] = 'Kia'

console.log(carro.length)

// Exemplo 3:

// Array.from()...Array.form() é um método utilizado para transformar array-like objects, em uma array...

const li = document.querySelectorAll('li')

const arrayLi = Array.from(li)

console.log(li)
console.log(arrayLi)

// Exemplo 4:

// Array.isArray()...Verifica se o valor passado é uma array e retorna um valor booleano...

console.log(Array.isArray(li))

// Exemplo 5:

// Array.of(), Array() e new Array()...Verifica se o valor passado é uma array e retorna um valor booleano. A palavra chave new não é necessária para utilizar o construtor Array...

Array.of(10)
Array.of(1, 2, 3, 4, 5)

// Exemplo 6:

// Propriedades e Métodos do Prototype...'[].length' retorna o tamanho de array...

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']]

console.log(frutas.length)

// Exemplo 7:

// Métodos Modificadores [].short()...
// Os próximos métodos são modificadores (mutador methodos). Além de retornarem um valor, eles modificam a array original. [].short() organiza a pelo unicode...

const instrumento = ['Guitarra', 'Baixa', 'Violão']

//instrumento.short()

const idade = [32, 21, 33, 43, 1, 12, 8]

console.log(instrumento)
console.log(idade)

// Exemplo 8:

// [].unshift() e [].push()...[].unshift() adiciona elementos ao início da array e retorna o length da mesma. [].push() adicona elementos ao final da array e retorna o lenght da mesma...

const carros = ['Ford', 'Fiat', 'W']

carros.unshift('Kia')
carros.push('Parati')

console.log(carros)

// Exemplo 9:

// [].shift() remove o primeiro elemento da array e  retorna o mesmo. [].pop() remove o últiomo elemento da array e retorna o mesmo...

console.log(carros.pop())
console.log(carros.shift())

// Exemolo 10:

// [].reverse() inverte os itens da array e retorna a nova array...

console.log(carros.reverse())