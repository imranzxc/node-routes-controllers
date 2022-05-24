const { Router } = require('express');
const { productController } = require('../controllers/product.controller');

const router = Router();

router.get('/products', productController.getProduct)
router.get('/products/:id', productController.getProductId)
router.post('/products', productController.postProduct)
router.delete('/produdcts/:id', productController.deleteid)

module.exports = router