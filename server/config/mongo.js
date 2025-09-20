const mongoose = require('mongoose');

async function connectDB(){
    try {
        const connection = await mongoose.connect('mongodb+srv://pranshoo:tJ3P1wqUNS3PVQ0O@nodecluster.xu99l.mongodb.net/ecom-app');
        console.log('Database Connected')
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectDB;