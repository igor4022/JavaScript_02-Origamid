// Exemplo 1:

// Formulários...É comum utilizarmos inputs de formulários para criarmos uma interface entre funções de JavaScript e o usuário final do site. Para isso precisamos aprender como pegar os valores dos formulários...

const contato = document.querySelector('#contato')

console.log(contato.elements.nome)
console.log(document.forms[0])

// Exemplo 2:

// Valores...A propriedade valueretorna o valor do elemento no formulário. Se adicionarmos um callback ao keyup (tecla levantar), podemos ficar de olho no evento e puxar o valor sempre que ele mudar. changedispara quando há mudanças...

const texto = document.querySelector('.texto')

function handleKeyUp(event) {
    console.log(event.target.value)
    texto.innerText = event.target.value
}

contato.addEventListener('keyup', handleKeyUp)

// Exemplo 3:

// Validação...O método checkValidityverifica se uma entrada com o atributo obrigatório é válida ou não. A propriedade validationMessagepossui uma mensagem padrão de erro do navegador. É possível modificar comsetCustomValidity('')...

function handleKey(event) {
    const target = event.target

    document.body.style.backgroundColor = event.target.value

    if(!target.checkValidity()) {
        target.setCustomValidity('Esse campo é super importante')
        target.classList.add('invalido')
        target.nextElementSibling.innerText = target.validationMessage

    }
    console.log(event.target.checkValidity())

    if(event,target.cheked) {
        console.log(event.target.value)
    }
}

contato.addEventListener('change', handleKey)