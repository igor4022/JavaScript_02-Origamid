// Exemplo 1:

// Prtotype...A proriedade prototype é um objeto adicionado a uma função quando a mesma é criada...

function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

const andere = new Pessoa('Andre', 28)

console.log(Pessoa.prototype)

// Exemplo 2:

// É possível adicionar novas propriedades e métodos ao objeto prototype...

Pessoa.prototype.andar = function() {
    return 'Pessoa andou'
}