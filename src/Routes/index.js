const router = require('express').Router();
const { getProduct, catFilter, selectCat, selectedCat, searchFilter } = require('../services/services')
const pool = require('../db')


router.get('/hola', getProduct)
router.get('/categorias', catFilter)
router.get('/categorias/:id', selectCat)
router.get('/cat/:id', selectedCat)
router.get('/search/:name', searchFilter)


module.exports = router;