// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let val = 0
transacoes.forEach((item) => {
  const numeroLimpo =+ item.valor.replace('R$', '')
  if (item.descricao.slice(0, 4) === 'Taxa') {
    val += numeroLimpo
  }
})

console.log(val)

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

console.log(transportes.slice(0,5))

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

console.log(html.replace(/['span']+/g, 'a'))

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';

console.log(frase.slice(12,-1))

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

transacoes2.forEach((item) => {
  let taxa = 0
  console.log(item.startsWith('taxa'))

})
