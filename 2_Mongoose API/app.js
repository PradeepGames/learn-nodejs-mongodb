
const express = require('express');
require('./config');
const products = require('./products');

const app = express();
app.use(express.json());

app.post("/create", async (req, resp) => {
    let data = new products(req.body);
    let result = await data.save();
    console.log(result)
    resp.send(result);
});

app.get("/list", async (req, resp) => {
    let data = await products.find();
    resp.send(data);
});

app.delete("/delete/:_id", async (req, resp) => {
    let data = await products.deleteOne(req.params);
    resp.send("deleted");
});

app.put("/update/:_id", async (req, resp) => {
    let data = await products.updateOne(
        req.params,
        {
            $set: req.body
        });
    resp.send("updated");
});


app.get("/search/:key", async (req, resp) => {

    let data = await products.find(
        {
            "$or": [
                { "name": { $regex: req.params.key } }, // single key
                { "name": { $regex: req.params.key } } // multi key
            ]
        });

    resp.send(data);
});

app.listen(5000);