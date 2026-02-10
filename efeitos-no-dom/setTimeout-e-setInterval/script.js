// Exemplo 1:

// setTimeout()...setTimeout(callback, tempo, arg1, arg2, ...)método sincronizado que ativa o retorno de chamada após tempo... 
// Não existe garantia de que o código será executado exatamente após o tempo, pois o callback entra na fila e espera pela Call Stack estar vazio...

function espera(texto) {
    console.log(texto)
}

setTimeout(espera, 1000, 'Depois de 1s')

// Exemplo 2:

// Imediato...Se não passarmos o argumento de tempo, ele deverá assumir o valor 0 e entrará filaimediatamente para ser executado. Podemos passar uma função anônima diretamente com argumento...

setTimeout(() => {
  console.log('Após 0s?')
})

// Exemplo 3:

// Loops e setTimeout...Um loop é executado rapidamente, em milissegundos. Se colocarmos um setTimeout dentro do loop, todos eles serão inseridos na Web Api praticamente no mesmo tempo. Um evento de setTimeout não espera o tempo do anterior acabar para iniciar...

for(let i=0; i<20; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000 * i)
}

// Exemplo 4:

// Esta janela...setTimeout é um método do objeto Window. O valor de thisdentro do mesmo callback é uma referência ao seu objeto no caso Window...

const btn = document.querySelector('button')

function onButton() {
    setTimeout(() => {
        this.classList.add('active')
    }, 1000)
}

setTimeout(() => {
    console.log('Testado')
})

btn.addEventListener('click', onButton)

// Exemplo 5:

// definirIntervalo...setInterval(callback, tempo, arg1, arg2, ...), você deverá ativar o retorno de chamada toda vez que uma quantidade de tempo passar...

let l = 0

setInterval(() => {
    console.log(l++)
}, 7000)

// Exemplo 6:

// intervalo claro...clearInterval(var), podemos parar um intervalo com o clearInterval. Para isso precisamos depender do setInterval em uma variável...

let d = 0

const tempo = setInterval(() => {
    console.log(d++)
    if (d > 50) {
        clearInterval(tempo)
    }
}, 100)