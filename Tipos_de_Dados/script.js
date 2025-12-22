// O 'typeof' é usado para indentificar que tipos são os seus valores...

var nome = 'Igor'
var idade = 16
var time = null
var sombolo = Symbol()

console.log(typeof idade, typeof time)

// Você também pode somar Strings...

// Exemplo 1:

var nome = 'Igor'
var sobnome = 'Maciel'
var completo = nome + ' ' + sobnome

console.log(completo)

// Exemplo 2:

var gols =  1000
var frase = 'Romário fez ' + gols + ' gols'

console.log(typeof frase)

// Exemplo 3:

var ano = '2000'
var mes = 1

console.log(ano + mes)

// Utilizando aspas símples e aspas duplas...

var melhor = 'melhor'
var frase1 = 'Esse é o  "melhor" jogo'
var frase2 = 'Esse é o' + melhor + 'jogo'

console.log(frase1)

// Passando valores de forma dinamica...

var gols = 1000
var frase3 = `Romário fez ${gols * 2} gols`

console.log(frase3)