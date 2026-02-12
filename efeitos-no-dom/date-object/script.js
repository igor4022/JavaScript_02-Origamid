// Exemplo 1:

// novo Date()...O construtor Date cria um objeto contendo valores como mês, dia, ano, horário e mais. Os dados são baseados no relógio interno do computador...

const agora = new Date()
agora
// Semana Mês Dia Ano HH:MM:SS GMT
agora.getDate() // Dia
agora.getDay() // Dia da Semana ex: 5 = Fri
agora.getMonth() // Número dia mês
agora.getFullYear() // Ano
agora.getHours() // Hora
agora.getMinutes() // Minutos
agora.getTime() // ms desde 1970
agora.getUTCHours() - 3 // Brasília

// Exemplo 2:

// obterTempo()...O método getTime() mostra o tempo total em milhas segundos desde o dia 1º de janeiro de 1970...

const agora2 = new Date();
agora2.getTime()

// total de dias desde 1 de janeiro de 1970
const diasPassados = agora2.getTime() / (24 * 60 * 60 * 1000)

// Exemplo 3:

// Dias até...Podemos criar um objeto com um dado no futuro, passando uma string com o valor da data...

const agora3 = new Date();
const promocao = new Date('December 24 2018 23:59');

function converterEmDias(time) {
  return time / (24 * 60 * 60 * 1000);
}

const diasAgora = converterEmDias(agora3);s
const diasPromocao = converterEmDias(promocao);

const faltam = diasPromocao - diasAgora;
