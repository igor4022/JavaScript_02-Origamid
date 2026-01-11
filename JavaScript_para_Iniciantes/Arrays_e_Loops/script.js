// Exemplo 1:

// Array é um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável...

// o metodo 'pop()' remove o último item e retorna ele...

// o metodo 'push()' adicina um array no final da lista...

var videoGames = ['Switch', 'PS4', 'XBox']

var item = videoGames.pop()

videoGames.push('3DS')

// Exemplo 2:

// For Loop fazem algo repitidamente até que uma condição seja atingida...

for (var num = 1; num < 11; num ++) {

    console.log(num)
}

// Também tem o While Loop...

var i = 1

while (i < 11) {

    console.log(i)
    i ++
}

// Exemplo 3:

// Arrays e Loops...

var consoles = ['Switch', 'PS4', 'XBox']

for (var item = 0; item < 3; item ++) {

    console.log(consoles[item])
}

// Exemplo 4:

// Break...O loop irá parrar caso encontre a palavra break...

var games = ['Switch', 'PS4', 'XBox']

for (var i = 0; i < 3; i ++) {

    console.log(games[i])

    if (games[i] === 'PS4') {

        break
    }
}

// Exemplo 5:

// ForEach...forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)...

var jogo = ['Switch', 'PS4', 'XBox']

jogo.forEach(function(coisa, index) {

    console.log(coisa, index)
})