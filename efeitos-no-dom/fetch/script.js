// Exemplo 1:

// API Fetch...Permite fazer requisições HTTP através do método fetch(). Este método retorna a resolução de uma promessa. Podemos então usar o then para interagirmos com a resposta, que é um objeto do tipo Response...

const doc = fetch('./doc.txt')

doc.then(resolucao => {
    console.log(resolucao)
})