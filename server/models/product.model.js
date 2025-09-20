const Product = require('./product.mongo.js')

const createProduct = async (newProduct) => {
    try {
        return await Product.create(newProduct);
    } catch (error) {
        console.error(error);
    }
}

const readProducts = async () => {
    try {
        return await Product.find();
    } catch (error) {
        console.error(error);
    }
}

const updateProduct = async (id, newData) => {
    try {
        return await Product.findOneAndUpdate({_id: id}, newData);
    } catch (error) {
        console.error(error);
    }
}

const deleteProduct = async (id) => {
    try {
        return await Product.findOneAndDelete({_id: id});
    } catch (error) {
        console.error(error);
    }
}

module.exports = {createProduct, readProducts, updateProduct, deleteProduct}