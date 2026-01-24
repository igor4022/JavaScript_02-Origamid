// Exemplo 1:

// [].forEach()...[].forEach(callback(itemAtual, index, array))A função de retorno de chamada é realizada para cada item do array. Ela possui três argumentos, itemAtual (valor do item da matriz), índice (índice do valor na matriz) e matriz (array original)...

const carros = ['Ford', 'Fiat', 'Honda']

carros.forEach((item, index, array) => {
    array[index] = 'Teste'
    console.log(item, index, array)
})

console.log(carros)