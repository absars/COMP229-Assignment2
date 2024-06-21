const productController = require('../controllers/productController');
const express = require('express');
const router = express.Router();

router.get('/products', (req, res, next) => {
  if (req.query.name) {
    productController.searchProductsByName(req, res, next);
  } else {
    productController.getAllProducts(req, res, next);
  }
});
router.get('/products/:id', productController.getProductById);
router.post('/products', productController.createProduct);
router.put('/products/:id', productController.updateProductById);
router.delete('/products/:id', productController.deleteProductById);
router.delete('/products', productController.deleteAllProducts);

module.exports = router;
