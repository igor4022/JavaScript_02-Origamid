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

// EXemplo 11:

// []splice()...[].splice(index, item1, item2, ...)adiciona valores na array a partir do index, Remove a quantidade de itens que for passada no segundo parâmetro(retorna esse itens)...

carros.splice(2, 0, 'Fusca')

console.log(carros)

// Exemplo 12:

// [].copyWithin(alvo, inicio, final) a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia. Caso omita os valores de ínicio e final, ele irá utilizar como inicio o 0 e o final o valor total da array...

console.log(['item1', 'item2', 'item3', 'item4', 'item5'].copyWithin(2, 0, 3))

// Exemplo 13:

// [].fill()...[].fill(valor, inicio, final) prenche a array com o valor, do ínicio até o fim...

console.log(['item01', 'item02', 'item03', 'item04', 'item05'].fill('Café'))

console.log(['item01', 'item02', 'item03', 'item04', 'item05'].fill('Café', 1))

console.log(['item01', 'item02', 'item03', 'item04', 'item05'].fill('Café', 1, 3))

// Exemplo 14:

// Métodos de Acesso [].concat()...
// Os métodos abaixo não modificam a array original, apenas retornam uma array modificada. '[].concat()' irá concatenar a array com o valor passado...

const transporte1 = ['Barco', 'Aviao']
const transporte2 = ['Carro', 'Moto']
const transportes = transporte1.concat(transporte2)
const maisTransportes = [].concat(transporte1, transporte2)

console.log(transportes)
console.log(maisTransportes)

// Exemplo 15:

// [].includes(), [].indexOf() e [].lastIndexOf()...
// '[].includes(valor)' verifica se um array possui o valor e retorna verdadeiro ou falso. '[].indexOf(valor)' verifica se um array possui o valor e retorna o índice do primeiro valor no array. Já o '[].lastIndexOf(valor)' retorna o índice do último...

const linguagnes = ['html', 'css', 'js', 'php', 'pyhon', 'js']

linguagnes.includes('css')
linguagnes.indexOf('python')
linguagnes.lastIndexOf('js')

// Exemplo 16:

// [].join(separador)junta todos os valores do array e retorna uma string com eles. Se você passar um valor como parâmetro, ele será utilizado durante o uso de cada item do array...

let htmlString = '<h2>Título Principal</h2>'
htmlString = htmlString.split('h2')
htmlString = htmlString.join('h1')

console.log(htmlString)

// Exemplo 17:

// [].slice(inicio, final)retorna os itens do array começando pelo início e indo até o valor de final...

console.log(linguagnes.slice(1, 3))