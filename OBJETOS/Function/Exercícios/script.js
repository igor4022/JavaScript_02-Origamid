// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const listaValores = document.querySelectorAll('p')

const soma = Array.prototype.reduce.call(listaValores,(lista, acumula) => {
  return lista + acumula.innerText.length
}, 0)

console.log(soma)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function retornar(tag, classe, conteudo) {
  const elemento = document.createElement(tag)

  classe ? elemento.classList.add(classe) : null
  conteudo ? elemento.innerHTML = conteudo : null

  return elemento
}

console.log(retornar('li','ativa', 'oi'))



// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const exemplo = retornar.bind(null, 'h1', 'titulo')

console.log(exemplo('Curso de JavaScript'))