
const express = require('express')
const DbConnect = require('./mongodb')
const mongodb = require('mongodb')
const app = express();

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/LearnDB");

app.use(express.json());

const ProductSchema = new mongoose.Schema({
    name: String,
    mobile: Number
});

const SaveDB = async () => {
    const ProductsModel = mongoose.model('products', ProductSchema);
    let data = new ProductsModel({ name: "RRRR", mobile: 98575747432 });
    let result = await data.save();
    console.warn(result);
}

const UpdateDB = async () => {
    const ProductsModel = mongoose.model('products', ProductSchema);
    let data = await ProductsModel.updateOne(
        {
            name: "RRRR"
        },
        {
            name: "Rao Updated"
        }
    )
    if (data.acknowledged && data.modifiedCount > 0) {
        console.warn("Updated Data");
    }
}

const DeleteDB = async () => {
    const ProductsModel = mongoose.model('products', ProductSchema);
    let data = await ProductsModel.deleteOne(
        {
            name: "RRRR"
        }
    )
    if (data.acknowledged && data.deletedCount > 0) {
        console.warn("deleted Data");
    }
}

const FindDB = async () => {
    const ProductsModel = mongoose.model('products', ProductSchema);
    let data = await ProductsModel.find();
    console.warn(data);
}

//SaveDB();
//UpdateDB();
//DeleteDB();
FindDB();

