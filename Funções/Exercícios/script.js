// Crie uma função para verificar se um valor é Truthy

function isverdade (dado) {

    return !!dado
}


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado


function perimetro (lado) {

    return `Seu quadrado tem ${lado * 4} de perímetro`
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

 nome = 'Igor'
 sobe = 'Maciel'
 valor = nome + ' ' + sobe

 function nomes(valor) {

    return valor
 }

// Crie uma função que verifica se um número é par

function numero(par) {

    if (par % 2 == 0) {

        return `O seu número ${par} é PAR`
    } else if (par % 1 == 0) {

        return `O seu número ${par} é ÍMPAR`
    } else {

        return `[!!!ERRO!!!] Dígite um núemro porfavor...`
    }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function argumento(dado) {

    console.log(typeof dado)
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function() {

    console.log('Igor Maciel Pinhero')
})

// Corrija o erro abaixo

var totalPaises = 193;

function precisoVisitar(paisesVisitados) {

  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {

  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
