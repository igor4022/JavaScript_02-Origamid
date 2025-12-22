// console.log('Ola MUndo!')

// Exemplo 1:

var nome = 'Igor'
var idade = 28
var pos = true

console.log(nome, idade, pos, nome)

// Exemplo 2:

var preso = 25
var total = 5
var talpres  = total + preso

console.log(talpres)

// Exemplo 3:
// Adicionando uma virgula em uma variavel criada é entepretado como se a outra escrita ja fosse um nova variavel...

var sobnome = 'Maciel',
    cidade = 'Timbó'

console.log(sobnome, cidade)

// Exemplo 4:
// Variaveis não definidas ganham 'undefined'...

var notdifine

console.log(notdifine)

// Exemplo 5:
// As variaveis 'var' e 'let' podem ser redeclaradas, já 'const' não...

var time = 'Vasco'
time = 'Flamengo'

console.log(time)

let time = 'Vasco'
time = 'Flamengo'

console.log(time)

const time = 'Vasco'
time = 'Flamengo'

console.log(time)