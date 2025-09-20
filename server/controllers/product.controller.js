const { createProduct, readProducts, updateProduct, deleteProduct } = require("../models/product.model");

const addProduct = async (req, res)=>{
    try {
        await createProduct(req.body)
        res.send('Product Added Successfully!');
    } catch (error) {
        console.error(error);        
    }
}

const getProducts = async (req, res)=>{
    try {
        const products = await readProducts()
        res.send(products)
    } catch (error) {
        console.error(error);
    }
}

const changeProduct = async (req, res)=>{
    try {
        await updateProduct(req.params.id, req.body)
        res.send('Product Updated Successfully')
    } catch (error) {
        console.error(error);
    }
}

const removeProduct = async (req, res)=>{
    try {
        await deleteProduct(req.params.id)
        res.send('Product removed')
    } catch (error) {
        console.error(error);
    }
}

module.exports = {addProduct, getProducts, changeProduct, removeProduct}