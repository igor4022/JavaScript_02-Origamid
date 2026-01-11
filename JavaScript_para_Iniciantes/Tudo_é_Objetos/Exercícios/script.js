// nomeie 3 propriedades ou métodos de strings
var nome = 'Igor'

console.log(nome.at(1))
console.log(nome.charAt(2))
console.log(nome.endsWith(nome))

// nomeie 5 propriedades ou métodos de elementos do DOM

var btn = document.querySelector('.btn')


btn.addEventListener('click', function() {

    
    console.log('AH!...Que susto pó!...Não chega me tocando assim do nada')
})

btn.addEventListener('dblclick', function() {

    console.log('Olá...Porque ta me tocando?')
})

btn.addEventListener('dragstart', function() {

    console.log('Não toque em min!')
})

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

btn.addEventListener('dblclick', function() {

    navigator.clipboard.writeText('Não! Já chega! Você não pode ficar me colondo assim do nada!')

        alert('Quem te deu permisão para me copiar!?')
})