const h1 = document.querySelector('div')
const cor = document.querySelector('[data-cor]')

h1.dataset.height = 1000
console.log(h1.dataset)

// dataseté uma propriedade de HTMLElement, essa propriedade é um objeto do tipo DOMStringMap... 
// Dentro desse objeto existe uma coleção de chave / valor, com todos os atributos do elemento html que começam com data-...

//Data vs. Classe...A vantagem de usar atributos de dados é que torna mais fácil evitar conflitos com estilos do CSS. Além de deixar a estrutura da etiqueta mais organizada...

// Nomenclatura...Por padrão o JavaScript não aceita - (traço) como caracter válido para nomear propriedades. Então qualquer traço será removido e a letra seguinte transformada em guardas...

h1.dataset.totalHeight = 2000;

console.log(h1.dataset)