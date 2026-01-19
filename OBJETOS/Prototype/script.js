// Exemplo 1:

// Prtotype...A proriedade prototype é um objeto adicionado a uma função quando a mesma é criada...

function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

const andre = new Pessoa('Andre ', 28)

console.log(Pessoa.prototype)

// Exemplo 2:

// É possível adicionar novas propriedades e métodos ao objeto prototype...

Pessoa.prototype.andar = function() {

    return this.nome + 'Pessoa andou'
}

Pessoa.prototype.nadar = function() {

    return this.nome + 'Pessoa nadou'
}

// Acesso ao Protótipo...O objeto criado utilizando o construtor. Lembrando, prototype é uma propriedade e funções apenas...

// Exemplo 3:

// Construtores Nativos...Objetos, Funções, Números, Strings e outros tipos de dados são criados utilizando construtores...

// Esses construtores possuem um protótipo com propriedades e métodos, que poderão ser acessadas pelo tipo de dado...

const pais = 'Brasil'
const cidade = new String('Rio')

// Exemplo 4:

// É possível acessar a função do protótipo...

// É comum, principalmente em códigos mais antigos, o uso direto de funções do protótipo do construtor Array...

const listaAnimais = ['Cachorro', 'Gato', 'Coruja']

const lista = document.querySelectorAll('li')

const listaArray = Array.prototype.slice.call(lista)

// Exemplo 5:

// Métodos do Objeto vs Protótipo...

// Nos objetos nativos existem métodos linkados diretamente ao Objeto e outros linkados ao protótipo...

const listaArray1 = Array.prototype.slice.call(lista)
const listaArray2 = Array.from(lista)

// Exemplo 6:

// Entenda o Que está Sendo Retornado.....

// Os métodos e propriedades acessado com o '.' são referentes ao tipo de dados que é retornado antes desse '.'...

const Carro = {
    marca: 'Ford',
    preco: 2000,
    andar() {
        return true
    }
}

// Exemplo 7:

// É a construtora de strings, toda string possui as propriedades e métodos do prototype de String...

const comida = 'Pizza'
const agua = new String('Agua')

// Exemplo 8:

// str.length...Propriedade como o total de caracteres da string...

console.log(comida.length)

comida[0]

const frase = 'Amelhor comida'

console.log(frase[frase.length])

// Exemplo 9:

// str.charAth(n)...Retorna o caracter de acordo com index ne (n)

console.log(frase.charAt(frase.length))

// Exemplo 10:

// str.concat(str2, str3, ...)...Concatenas as strings e retorna o resultado...

const frases = 'A melhor linguagem é'
const linguagem = 'JavaScript'

const fraseFinal = frase.concat(linguagem)