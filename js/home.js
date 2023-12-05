'use strict'

const categoria = [
    {
        nome: 'pizzas',
        pic: 'pizza.png'
    },
    {
        nome: 'bebidas',
        pic: 'bebida.png'
    },
    {
        nome: 'frutas',
        pic: 'Watermelon.png'
    },
    {
        nome: 'pizzas meio a meio',
        pic: 'duaspizzas.png'
    },
    {
        nome: 'sundae',
        pic: 'sundae.png'
    },
    {
        nome: 'sorvete',
        pic: 'sorvete.png'
    },
    
]

const criarCategoria = function (categoria){

    const categoriaBox = document.createElement('div')
    categoriaBox.classList.add('categoria-box')

    const imagem = document.createElement('img')
    imagem.src = `../img/categorias/${categoria.pic}`
    imagem.alt = categoria.nome

    categoriaBox.appendChild(imagem)

    return categoriaBox
}

const mostrarCategorias = function (categoria) {

    const categoriasArea = document.getElementById('categorias-area')
    const categoriaBox = criarCategoria(categoria)
    categoriasArea.appendChild(categoriaBox)
}

categoria.forEach(mostrarCategorias)