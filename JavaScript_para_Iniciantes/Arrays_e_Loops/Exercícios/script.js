// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var copa = ['1959', '1962', '1970','1994', '2002']

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

copa.forEach(function(copa) {

    console.log(`Brasil venceu a Copa de ${copa}`)
})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (item = 0; item < 5; item ++) {

    console.log(frutas[item])

    if (frutas[item] === 'Pera') {

       break

    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

frutas.push('Tangerina')

frutas.forEach(function(frutas) {

    console.log(frutas)
})
