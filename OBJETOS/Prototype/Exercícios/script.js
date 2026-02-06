// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobreNome, idade) {

    this.nome = nome
    this.sobreNome = sobreNome
    this.idade = idade
}

Pessoa.prototype.nomeCompleto = function() {
    
    console.log(`Meu nome é ${this.nome} ${this.sobreNome}, e eu tenho ${this.idade} anos de idade`)
}

const andre = new Pessoa('Andre', 'Carvalho', 25)
const igor = new Pessoa('Igor', 'Maciel', 16)
const lucas = new Pessoa('Lucas', 'Androzequicem', 25)

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // HTMLLIElement
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String