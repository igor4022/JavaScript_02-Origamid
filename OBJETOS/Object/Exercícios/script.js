// Crie uma função que verifique
// corretamente o tipo de dado

const banana = 'Banana'

console.log(banana.toString())

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {
  nome: 'Quadrado',
  lados: 4
}

Object.freeze(quadrado)

quadrado.lados =  10

console.log(quadrado)

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.freeze(configuracao)

configuracao.height = 7000

configuracao['item'] = 1

console.log(configuracao)

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

console.log(Object.getOwnPropertyNames(String.prototype))
console.log(Object.getOwnPropertyNames(Array.prototype))

// String:

/*
  at
  : 
  ƒ at()
  concat
  : 
  ƒ concat()
  constructor
  : 
  ƒ Array()
  copyWithin
  : 
  ƒ copyWithin()
  entries
  : 
  ƒ entries()
  every
  : 
  ƒ every()
  fill
  : 
  ƒ fill()
  filter
  : 
  ƒ filter()
  find
  : 
  ƒ find()
  findIndex
  : 
  ƒ findIndex()
  findLast
  : 
  ƒ findLast()
  findLastIndex
  : 
  ƒ findLastIndex()
  flat
  : 
  ƒ flat()
  flatMap
  : 
  ƒ flatMap()
  forEach
  : 
  ƒ forEach()
  includes
  : 
  ƒ includes()
  indexOf
  : 
  ƒ indexOf()
  join
  : 
  ƒ join()
  keys
  : 
  ƒ keys()
  lastIndexOf
  : 
  ƒ lastIndexOf()
  length
  : 
  0
  map
  : 
  ƒ map()
  pop
  : 
  ƒ pop()
  push
  : 
  ƒ push()
  reduce
  : 
  ƒ reduce()
  reduceRight
  : 
  ƒ reduceRight()
  reverse
  : 
  ƒ reverse()
  shift
  : 
  ƒ shift()
  slice
  : 
  ƒ slice()
  some
  : 
  ƒ some()
  sort
  : 
  ƒ sort()
  splice
  : 
  ƒ splice()
  toLocaleString
  : 
  ƒ toLocaleString()
  toReversed
  : 
  ƒ toReversed()
  toSorted
  : 
  ƒ toSorted()
  toSpliced
  : 
  ƒ toSpliced()
  toString
  : 
  ƒ toString()
  unshift
  : 
  ƒ unshift()
  values
  : 
  ƒ values()
  with
  : 
  ƒ with()
  Symbol(Symbol.iterator)
  : 
  ƒ values()
  Symbol(Symbol.unscopables)
  : 
  {at: true, copyWithin: true, entries: true, fill: true, find: true, …}
  [[Prototype]]
  : 
  Object
*/

// Array:

/*
  at
  : 
  ƒ at()
  concat
  : 
  ƒ concat()
  constructor
  : 
  ƒ Array()
  copyWithin
  : 
  ƒ copyWithin()
  entries
  : 
  ƒ entries()
  every
  : 
  ƒ every()
  fill
  : 
  ƒ fill()
  filter
  : 
  ƒ filter()
  find
  : 
  ƒ find()
  findIndex
  : 
  ƒ findIndex()
  findLast
  : 
  ƒ findLast()
  findLastIndex
  : 
  ƒ findLastIndex()
  flat
  : 
  ƒ flat()
  flatMap
  : 
  ƒ flatMap()
  forEach
  : 
  ƒ forEach()
  includes
  : 
  ƒ includes()
  indexOf
  : 
  ƒ indexOf()
  join
  : 
  ƒ join()
  keys
  : 
  ƒ keys()
  lastIndexOf
  : 
  ƒ lastIndexOf()
  length
  : 
  0
  map
  : 
  ƒ map()
  pop
  : 
  ƒ pop()
  push
  : 
  ƒ push()
  reduce
  : 
  ƒ reduce()
  reduceRight
  : 
  ƒ reduceRight()
  reverse
  : 
  ƒ reverse()
  shift
  : 
  ƒ shift()
  slice
  : 
  ƒ slice()
  some
  : 
  ƒ some()
  sort
  : 
  ƒ sort()
  splice
  : 
  ƒ splice()
  toLocaleString
  : 
  ƒ toLocaleString()
  toReversed
  : 
  ƒ toReversed()
  toSorted
  : 
  ƒ toSorted()
  toSpliced
  : 
  ƒ toSpliced()
  toString
  : 
  ƒ toString()
  unshift
  : 
  ƒ unshift()
  values
  : 
  ƒ values()
  with
  : 
  ƒ with()
  Symbol(Symbol.iterator)
  : 
  ƒ values()
  Symbol(Symbol.unscopables)
  : 
  {at: true, copyWithin: true, entries: true, fill: true, find: true, …}
  [[Prototype]]
  : 
  Object
*/