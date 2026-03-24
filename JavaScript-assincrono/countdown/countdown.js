export default class Countdown {
    constructor(futuraData) {
        this.futuraData = futuraData
    }
    get _atualData() {
        return new Date()
    }
    get _futuraData() {
        return new Date(this.futuraData)
    }
    get _tempoEspera() {
        return this._futuraData.getTime() - this._atualData.getTime()
    }
    get dias() {
        return Math.floor(this._tempoEspera / (24 * 60 * 60 * 1000))
    }
    get horas() {
        return Math.floor(this._tempoEspera / (60 * 60 * 1000))
    }
    get minutos() {
        return Math.floor(this._tempoEspera / (60 * 1000))
    }
    get segundos() {
        return Math.floor(this._tempoEspera / 1000)
    }
    get total() {
        const dias = this.dias
        const horas = (this.horas % 24)
        const minutos = (this.minutos % 60)
        const segundos = (this.segundos % 1000)

        return {
            dias, horas, minutos, segundos
        }
    }
}