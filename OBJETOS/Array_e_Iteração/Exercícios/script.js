// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = [
  {
    nome: 'HTML 1',
    descrisao: 'Curso básico de HTML',
    aulas: 'Aulas de HTML básico',
    hora: '40 horas'
  },
  {
    nome: 'CSS 1',
    descrisao: 'Curso básico de CSS',
    aulas: 'Aulas de CSS básico',
    horas: '40 horas'
  },
  {
    nome: 'JavaScript 1',
    descrisao: 'Curso básico de JavaScript',
    aulas: 'Aulas de JavaScript básico',
    horas: '40 horas'
  }
]

cursos.map((curso) => {
  return curso
})

console.log(cursos)


// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const resul = numeros.filter((ns) => ns >= 100)

console.log(resul)

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const confirmarBaixo = instrumentos.some((item) => item === 'Baixo')

console.log(confirmarBaixo)

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const somar = compras.reduce((acumulador, soma) => {
  const valorFinal = +soma.preco.replace('R$','').replace(',', '.')
  return acumulador + valorFinal
}, 0)

console.log(`R$${somar}`)