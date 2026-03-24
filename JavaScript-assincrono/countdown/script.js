import Countdown from "./countdown.js"

const tempoNatal = new Countdown('25 December 2027 GMT-0300')

console.log(tempoNatal._futuraData.getDate())
console.log(tempoNatal._tempoEspera)
console.log(tempoNatal.dias)
console.log(tempoNatal.horas)
console.log(tempoNatal.minutos)
console.log(tempoNatal.segundos)

setInterval(() => {
    const texto = document.querySelector('body')
    texto.innerText = tempoNatal.total

},1000000000)