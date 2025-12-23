// Exemplo 1:

// true = verdadeiro e false = falso...
// if = Se e else = Se não...

// Tudo o que estiver dentro das '{}' em 'if' é executavel...

// '()' tudo o que estiver dentro vai acabar sendo verificado e se for verdade ele procege no que esta dentro das '{}' em if...

// Sé não for verdadeiro ele procege para 'else' e executa o que esta dentro de 'else'...

var possuiGraduacao = true

if (possuiGraduacao) {
    console.log('É verdade')
} else {

    console.log('É mentira')
}

// Exemplo 2:

// Você pode usar 'else if' quando sua função tiver muitas condições assim seu código fica mais limpo...

// Além de você poder criar condições muito mais especificas podendo adicionar '()' no 'else if'...

var possuiDiploma = true
var possuiDoltorado = true

if (possuiDiploma) {

    console.log('Possui Diploma')
} else if (possuiDoltorado) {

    console.log('Possui Doltorado')
} else {

    console.log('Não possui nada')
}

// Exemplo 3:

// Existem outras formas de se declarar 'false'...
/* 
  Outras Formas:
  
  .0
  .NaN
  .null
  .undefined
  .''
*/

var zero = 0 + NaN + undefined + '' + null

console.log(zero)

// Exemplo 4:

// Sé você colocar uma '!' na frente da sua variavel você torna ela o oposto do que ela é, ou seja 'true = false ou false = true'...

var nota = false

if (nota) {

    console.log('Voce possui nota')
} else if (!nota) {

    console.log('Você não possui nota')
}

// Exemplo 5:

// Agora se você adiconar '!!' na frente da sua varialvel você podera ver sé ela é 'true' ou 'false'...

var val = 'número'
var num = !'número'

console.log(!!val, !!num)

// Exemplo 6:

// Operadores de comparação são usados para comparar resultados...
/* 
  
  Exemplo:

  .10 > 5 // O símbulo '>' pergunta 'sé 10 é maior que 5' ou seja recebe 'true' (porque 10 é maior que 5)...

  .5 > 10 // Nesse caso vai dar 'false' (por que 5 é menor que 10)...

  .20 < 10 // O símbulo '<' pergunta 'sé 20 é menor que 10' ou seja recebe 'false' (porque 20 não é menor que 10)...

  .10 <= 10 // O símbulob '<=' está perguntando 'se 10 é menor ou igual a 10' , ou seja vai dar 'true' (porque apesar do número não ser menor do que 10, ele é igual a 10)...

  .10 >= 11 // E sé o símbulo for '>=' ele está perguntando 'se 10 é maior ou igual a 11, ou seja vai dar 'false' (porque 10 não é maior do que 11 e também não é igual a 11)...

*/

nota = 7

if (nota >= 7) {

    console.log('Você passou!')
} else {

    console.log('Você reprovou')
}

if (nota <= 6) {

    console.log('Você reprovou')
} else {

    console.log('Você passou!')
}

if (nota > 7) {

    console.log('Você passou!')
} else {

    console.log('Você reprovou')
}

if (nota < 6) {

    console.log('Você reprovou')
} else {

    console.log('Você passou!')
}

// Exemplo 7:

// existe mais alguns tipos de operadores
/*
   Exemplo:

   10 == '10' // Esse símbulo '==' está perguntando 'se 10 é igual a 10', ou seja é 'true' (porque 10 é igual a '10')...

   10 === '10' // Já esse símbulo '===' está perguntando extritamente 'se 10 é igual a '10'', ou seja é 'false' (porque a pesar dos valores serem iguais, o '10' é uma string e não um número que nem o primeiro valor)...

   10 != 15 // Esse símbulo '!=' pergunta 'se 10 é diferente de 15' ou seja é 'true' (porque 10 é diferente de 15)...
   
   10 !== '10' // Já esse símbulo pergunta extritamente 'se 10 é diferente de '10', ou seja é 'true' (porque o valor '10' é uma string)...
*/

idade = '16'

if (idade != 18) {

    console.log('Já ta na hora de um emprego')
} else {

    console.log('já pode comesar mas blz')
}

if (idade == 16) {

    console.log('De verdade você deveria comesar a achar emprego')
    
} else {
    console.log('Então vai achar emprego né?')
}

if (idade !== 18) {

    console.log('Já ta na hora de um emprego')
} else {
    
    console.log('já pode comesar mas blz')
}

if (idade === 16) {

    console.log('De verdade você deveria comesar a achar emprego')
} else {

}
console.log('Então vai achar emprego né?')

// Exemplo 8:

// Agora vamos falar dos últimos operadores '&&' e '||'... 

// O símbulo '&&' pode ser usado para indicar que você quer mais de uma coisa em sua função...

// Sé 5 == 5 e 5 <= 5, recebe 'true' 
// Mas sé um deles estiver errado, recebe 'false'

if (5 == 5 && 5 <= 5) {

    console.log('Oi de boa')
  } 

// O símbulo '||' pode ser usado para dizer se você quer um ou outro

// Sé idade == 16 ou idade <= 18, recebe 'true' ...
// Sé a primeira estiver correta ele recebe 'true'...
// se a primeira não estiver correta ele passa para a outra e se estiver correta recebe 'true'...
// Mas se nem uma estiver correta ela recebe 'false'....

var idade = 16

if (idade == 16 || idade <= 18) {

    console.log('Íai...então...Como vai a procura de um trabalo')
}

// Exemplo 9:

// Com o 'switch' você pode verificar se uma variável é igual à diferentes valores utilizando o 'case' e finalizando com 'break'...

// E pode se usar o 'default' para indicar caso seja nenhumas opições escritas (ele funciona como se fosse um 'else')...

var corFavorita = 'Vermelha'

switch (corFavorita) {

    case 'Vermelha':
        console.log('Olhe para sua guitarra')
        break

    case 'Azul':
        console.log('Olhe para o céu')
        break

    case 'Amarelo':
        console.log('Olhe para o sol')
        break
    
    default:
        console.log('Não sei o que te dizer amigo')
}