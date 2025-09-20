const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

async function connectDB(){
    try {
        const connection = await mongoose.connect('mongodb+srv://pranshoo:tJ3P1wqUNS3PVQ0O@nodecluster.xu99l.mongodb.net/ecom-app');
        console.log('Database Connected')
    } catch (error) {
        console.error(error);
    }
}

const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    category: String
});

const Product = mongoose.model('product', productSchema);

connectDB();

app.get('/', (req, res)=>{
    res.send('Hello World!');
});

// POST /products
app.post('/products', async (req, res)=>{
    try {
        await Product.create(req.body);
        res.send('Product Added Successfully!');
    } catch (error) {
        console.error(error);        
    }
});

// GET /products
app.get('/products', async (req, res)=>{
    try {
        const products = await Product.find();
        res.send(products)
    } catch (error) {
        console.error(error);
    }
});

// PUT /product
app.put('/product/:id', async (req, res)=>{
    try {
        await Product.findOneAndUpdate({_id: req.params.id}, req.body);
        res.send('Product Updated Successfully')
    } catch (error) {
        console.error(error);
    }
});

// DELETE /product
app.delete('/product/:id', async (req, res)=>{
    try {
        await Product.findOneAndDelete({_id: req.params.id});
        res.send('Product removed Successfully')
    } catch (error) {
        console.error(error);
    }
})

app.listen(3000, ()=>{
    console.log('Server Started at port 3000')
});
