const { Router } = require('express');
const { brandController } = require('../controllers/brand.controller');

const router = Router();

router.get('/brands', brandController.getBrands)
router.post('/brands', brandController.postBrands)
router.delete('/brands', brandController.deleteBrands)

module.exports = router