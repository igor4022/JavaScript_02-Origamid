// Exemplo 1:

// Escopo de Função...Variáveis declaradas dentro de funçãoes não são acessadas fora das mesmas...

function mostraCarro() {

    var car = 'Fusca'

    console.log(car)
}

mostraCarro() // Fusca no console...

 // Erro, car is not defined...

// Exemplo 2:

// Variável Global(Erro)...Declarar variáveis sem a palavra chave 'var', 'const' ou 'let', cria uma varíavel que pode ser acessar em qualquer escopo (global). Isso é um erro...

function carro() {

  var carro = 'Fuscas' // Erro(car = 'Fusca')...

    console.log(carro)
}

carro()

console.log(carro())

// Exemplo 3:

// Escopo de Bloco...Variáveis criadas com 'var', vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declararmos uma variável é utilizando 'const' e 'let', pois estas respeitam o escopo de bloco...

if (true) {

    let mes = 'Janeiro'

    console.log(mes)
}

// Exemplo 4:

// Const e Let no lugar de Var

// A partir de agora vamos utilizar apenas 'const' e 'let' para declararmos variáveis...

if (true) {

    const car = 'Combe'

    console.log(car)
}

// Exemplo 5:

// '{}' cria um bloco...Chaves '{}' criam um escopo de bloco, não confundir com a criação de objetos '= {}'...

{
    let car2 = 'Combe 2'
    const ano = 2025
}

// Exemplo 6:

// Ao utilizar 'var' dentro de um 'for' loop, que é um bloco, o valor do variável utilizando irá 'vazar' e existir fora do loop...

for (let i = 1; i < 11; i++) {

    console.log(`Número ${i}`)
}

// Exemplo 7:

// Const... Mantém o escopo no bloco, impede a redeclaração do valor da varíavel, evitando bugs no código...

const semana = 'Sabádo'

console.log(semana)

const data = {
    ano: 2025,
    dia: 25,
    mes: 12

}

// Exemplo 8:

// Let...Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável...

let ano;
ano = 2025
ano ++

console.log(ano)

// let ano = 2020 <-- ERRO, redeclarou a variável...

