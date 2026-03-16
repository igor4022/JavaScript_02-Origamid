export default function intitFetchBitcoin() {

    async function valorBitcoin(url) {

        try {
            const bitcoin = await fetch(url)
            const bitcoinJson = await bitcoin.json()
            const bitcoinPreso = document.querySelector('.preso')
            bitcoinPreso.innerText = (100 / bitcoinJson.BRL.sell).toFixed(5)
        } catch(erro) {
            console.log(erro)
        }
    }

    valorBitcoin('https://blockchain.info/ticker')
}