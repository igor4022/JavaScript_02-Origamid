export default function initFuncionamento() {

    const data = new Date()
    
    console.log(data)

    function transformarDias(tempo) {
        return tempo / (24 * 24 * 1000)
    }

    console.log(transformarDias(data.getTime()))
}