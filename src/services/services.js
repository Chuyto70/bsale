const { response, request } = require('express');
const pool = require('../db')

//Metodo GET para obtener todos los elementos

function getProduct(req, res = response) {
    pool.query('SELECT * FROM product', async(err, result) => {

        let data = await result
        return res.json(data)
    })
}




//Filtrar por categorias

async function catFilter(req, res = response) {
    let categorias = [1, 2, 3, 4, 5, 6, 7]
    pool.query('SELECT * FROM product', (err, result) => {
        for (let i = 0; i < result.length; i++) {

            if (categorias.indexOf(result[i].category) > -1) {
                if (result[i].url_image.length <= 0) {
                    result[i].url_image = 'https://ecommerce.suministrosalarcon.com/assets/images/image-not-found.png'
                }
                categorias.splice(categorias.indexOf(result[i].category), 1, result[i])

            }
        }
        return res.json(categorias)
    })
}

//Seleccionando la categoria
async function selectCat(req, res = response) {
    let categoria = req.params.id

    pool.query('SELECT * FROM product', (err, result) => {
        let data = result.filter(element => element.category == categoria)
        return res.json(data)
    })

}

//Categoria seleccionada
async function selectedCat(req, res = response) {
    let param = req.params.id;
    pool.query('SELECT * FROM product', (err, result) => {

        if (err) {
            return res.json({ err: 'Error al consultar la base de datos', err })
        }

        let categoria = result.filter(elemento => elemento.category == param)
        for (let cat of categoria) {
            if (cat.url_image < 1) {
                cat.url_image = 'https://ecommerce.suministrosalarcon.com/assets/images/image-not-found.png'
            }
        }
        return res.json(categoria)
    })
}
//Buscador
async function searchFilter(req, res = response) {
    const toSearch = await req.params.name;
    let datos;

    let resulta = []
    pool.query('SELECT * FROM product', (err, result) => {
        if (err) {
            return res.json({ mensaje: 'Error al conectarse a la base de datos' })
        }
        for (let dato of result) {
            if (dato.name.toLowerCase().indexOf(toSearch.toLowerCase()) >= 0) {
                resulta.push(dato)
            }
        }
        return res.json(resulta)

    })
}

module.exports = {

    getProduct,
    catFilter,
    selectCat,
    selectedCat,
    searchFilter
}