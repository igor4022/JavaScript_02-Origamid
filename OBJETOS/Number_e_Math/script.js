// Exemplo 1:

// Number...É a construtora de números, todo número possui as propriedades e métodos do protype de Number. Number também possui alguns métodos...

// Number.isNaN() e Number.isInteger()...isNaN() é um método de Number, ou seja, não faz parte to protótipe.isInteger() verifica se é uma integral...

console.log(Number.isNaN('Não é valor'))
console.log(Number.isInteger(10.0))

// Exemplo 2:

// Number.parseFloat() e Number.parseInt()...

// parseFloat serve para retornarmos um número a partir de uma string. A String deve começar com um número. parseInt recebe também um segundo parâmetro que é o Radix, 10 é para decimal...

console.log(parseFloat('32322323,224242'))
console.log(parseFloat('100.27 reais'))
console.log(parseInt('100.27 reais'))

// Exemplo 3:

// n.toFixed(decimais)...Arredonda o número com base no total de casas decimais do argumento...

const preso = 2.75
console.log(preso.toFixed())

const preso2 = 100.27
console.log(preso2.toFixed(2))

// Exemplo 4:

// n.toLocaleString(lang, options)...Formata o número de acordo com a língua e opções passadas...

let valor = 50.25

valor = valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

console.log(valor)

// Exemplo 5:

// Math...É um Objeto nativo que possui propriedades e métodos de expressões matemáticas comuns...

console.log(Math.PI)

// Math.abs(), Math.ceil(), Math.floor() e Math.round()...
// abs() retorna o valor absoluto, ou seja, transforma a negativo em positivo. ceil() arredonda para cima, retornado sempre uma integral e floor para baixo. roud() arrendonda para o número integral mais próximo...

console.log(Math.abs(-5.5))

console.log(Math.ceil(4.2552545))
console.log(Math.ceil(4.3))

console.log(Math.floor(2.8242))
console.log(Math.floor(2.3))

console.log(Math.round(1.88887))
console.log(Math.round(1.3))

// Math.max(), Math.mim() e Math.random()...max() retorna o maior número de uma lista de argumentos, min() o menor número e random() um número aleatório entre 0 e 1...

console.log(Math.max(1, 2, 3, 4, 5, 6, 7))
console.log(Math.min(1, 2, 3, 4, 5, 6, 7))

aleatorio = Math.random()
console.log(Math.floor(aleatorio * 10))
