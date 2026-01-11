// Exemplo 1:
/*
   + = soma
   - = menos
   / = divisão
   % = resto da divisão 
   
*/

var idade = 16
var total = 10 + 5 + 10
var divisao = 250 / 50
var modulo = 387121239 % 7

console.log(idade, total, divisao, modulo)

// Exemplo 2:

// Sé a ecuação não possue némeros ela aparece como 'NaN'...
// 'isNaN' é usado para indentificar se a ecuação possue apenas números...
// Sé ela não for um número vai apareecer 'true'...

var teste = 'Isso é 100' / 2

console.log(teste)
console.log(isNaN(teste))

// Exemplo 3:

// Tem sinais de ecuação que são feitas antes de outros sinais...
/* Lista de Ecuação da Primeira a ser esecutavel até a última a ser esecutavel:

 1- *
 2- /
 3- %
 4- +
 5- -

 */

 var soma = 10 + 10 + 20 * 30 * 4 / 2 + 10

 console.log(soma)

 // Exemplo 4:

 // Poriso é importamte usar '()' quando você usa '()' numa ecuação vosse priorisa a conta dentro de '()'...

 var soma = 10 + 10 + 20 * 30 * 4 / (2 + 10)

 console.log(soma)
