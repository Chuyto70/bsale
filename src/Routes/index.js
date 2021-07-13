const router = require('express').Router();
const { postProduct, getProduct, catFilter, searchFilter } = require('../services/services')

router.get('/items', getProduct)
router.post('/category', postProduct);
router.get('/:category', catFilter);
router.get('/search/:nombre', searchFilter);

module.exports = router;