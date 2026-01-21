// Retorne um número aleatório
// entre 1050 e 2000

const aleatorio = Math.floor(Math.random() * (1050, 2000))

console.log(aleatorio)

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';

console.log(Math.max(4, 5, 20, 8, 9))


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

let soma = 0 

listaPrecos.forEach((lista) => {
    lista = +lista.toUpperCase().replace('R$', '').replace(',', '.')
    lista = Math.round(lista)
    soma += lista
})

console.log(soma)