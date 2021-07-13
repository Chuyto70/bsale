const Product = require('../models/product')
const { response, request } = require('express');

//Metodo post para ingresar mas elementos a la bbdd

async function postProduct(req, res = response) {
    if (!req.body || req.body == null || req.body == undefined) {
        return {
            message: "Necesitas ingresar datos al body"
        };
    }

    const { name, url_image, price, discount, category } = await req.body;
    const product = new Product({ name, url_image, price, discount, category });

    await product.save((err, respuesta) => {
        if (err) {
            return res.json({
                mensaje: "Error en la base de datos",
                Error: err
            })
        }
        return res.json({
            respuesta
        });
    })
}
//Metodo GET para obtener todos los elementos

async function getProduct(req, res = response) {
    const data = await Product.find({})
    return res.json({
        data
    })
}

//Filtrar por categorias

async function catFilter(req, res = response) {
    const toSearch = await req.params.category;
    let data = await Product.find({ category: toSearch })
    if (data.length < 1) {
        return res.json({
            Mensaje: "Categoria no valida"
        })
    }
    return res.json({
        data
    })
}

//Buscador
async function searchFilter(req, res = response) {
    const toSearch = await req.params.nombre;
    let datos = await Product.find({});
    let result = []
    for (let dato of datos) {
        if (dato.name.toLowerCase().indexOf(toSearch.toLowerCase()) >= 0) {
            result.push(dato)
        }
    }
    if (result.length < 1) {
        return res.json({
            Mensaje: `No hay resultado de ${toSearch}`
        })
    }
    return res.json({
        result
    })



}

module.exports = {
    postProduct,
    getProduct,
    catFilter,
    searchFilter
}