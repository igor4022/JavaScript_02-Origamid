// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(andar) {
  const nome =  'Nome pessoa'
  const idade = 0
  this.andar = function() {
    console.log(nome + ' andou');
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

function Pessoas(nome, num) {
    this.pessoa = nome
    this.idade = num
}

const joao = new Pessoas('João', 20)
const maria = new Pessoas('Maria', 25)
const bruno = new Pessoas('Bruno', 15)

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Construido(retorna, adiciona, remove) {

    this.retorna = retorna
    this.retorna = document.querySelector(retorna)
    
    this.adiciona = adiciona
    this.adiciona = document.querySelectorAll('li')

    this.adiciona.forEach((adi) => {
         adi.classList.add(adiciona)
    })
    
    this.remove = remove
    this.remove = document.querySelectorAll('li')

    this.remove.forEach((rem) => {
        rem.classList.remove(remove)
    })
    
}

const val = new Construido('li', 'pegar')
const val2 = new Construido('li', 'recolocar', 'pegar')