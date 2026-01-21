// Exemplo 1:

// str.concat(str2, str3, ...)...Concatenas as strings e retorna o resultado...

const frases = 'A melhor linguagem é '
const linguagem = 'JavaScript'

const fraseFinal = frases.concat(linguagem)

// Exemplo 2:

// str.includes(search, position)...Procura pela string exata dentro de outra string. Aprocura é case sensitiva...

const banana = 'Banana'
const listaFrutas = 'Uva, Banana, Tangerina'

console.log(listaFrutas.includes(banana))

// Exemplo 3:

// str.endsWith(search) e str.starstsWith(search)...Procura pela string exata dentro de outra string. A procura é case sensitiva...

console.log(banana.startsWith('Bana'))
console.log(banana.endsWith('na'))

// Eexmplo 4:

// str.slice(start, end)...Corta a string de acordo com os valores de start e end...

const nome = 'Igor'
const lingua = 'JavaScript'

console.log(nome.slice(0,3))
console.log(lingua.slice(0,-3))

// Exemplo 5:

// str.substring(start, end)...Corta a string de acorda com os valores de start e end. Não funcionar com valores negativos como o slice...

const feramenta = 'TypeScript' 

console.log(feramenta.substring(0,7))
console.log(feramenta.substring(1,-3))

// Exemplo 6:

// str.indexOf(search) e str.lastIndexOf(search)...Reotorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOf ele retorna o último resultado...

console.log(banana.indexOf('B'))
console.log(banana.lastIndexOf('a'))

// Exemplo 7:

// str.padStart(n,str) e str.padEnd(n,str)...
// Aumenta o tamanho da string para o valor n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento...

const valor = 'R$ 100,00'

console.log(valor.padStart(20, '.'))
console.log(valor.padEnd(20, '.'))

// Exemplo 8:

//str.pepeath(n)...Repete a string(n) vezes...

const fala = 'Tá'

console.log(fala.repeat(5))

// Exemplo 9:

// str.replace(regexp/substr, newstr/function)...
// Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direito. Se usarmos um valor direito ele irá trocar apenas o primeiro valor que encontrar...

let listaItens = 'Camisa Bonés Calças Bermudas Vestidos Saídas'
listaItens = listaItens.replace(/[' ']+/g, ', ')

console.log(listaItens)

// Exemplo 10:

// str.split(padrao)...Divide a string de acordo com o padrão passado e retorna uma arrat...

const arrayLista = listaItens.split('')

console.log(arrayLista)

// Exemplo 11:

// str.toLowerCase() e str.toUpperCase()...Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários...

const sexo1 = 'Feminino'
const sexo2 = 'feminino'
const sexo3 = 'FEMININO'

console.log(sexo1.toLowerCase() === 'feminino')
console.log(sexo1.toUpperCase() === 'FEMININO')

// Exemplo 11:

// str.trim(), str.trimStart(), str.trimEnd()...Remove espaço em branco do inicício au final de uma string...

const numero = ' R$ 25.00 '

console.log(valor.trim()) // 'R$ 25.00'
console.log(valor.trimStart()) // 'R$ 25.00 '
console.log(valor.trimEnd()) // ' R$ 25.00'