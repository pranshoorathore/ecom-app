const express = require('express');
const { addProduct, getProducts, changeProduct, removeProduct } = require('../controllers/product.controller');

const productRouter = express.Router(); 

// POST /products
productRouter.post('/', addProduct);

// GET /products
productRouter.get('/', getProducts);

// PUT /product
productRouter.put('/:id', changeProduct);

// DELETE /product
productRouter.delete('/:id', removeProduct);

module.exports = productRouter;