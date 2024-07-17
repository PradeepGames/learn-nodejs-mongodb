
const express = require('express')
const DbConnect = require('./mongodb')
const mongodb = require('mongodb')
const app = express();

app.use(express.json());

// Get data from MongoDb
app.get('/', async (res, resp) => {

    let data = await DbConnect();
    data = await data.find().toArray();
    resp.send(data);
});


// Post data in MongoDb
app.post('/', async (res, resp) => {

    console.log(res.body);
    let data = await DbConnect();
    let result = await data.insertOne(res.body);

    if (result.acknowledged)
        resp.send(res.body);
    else
        resp.send("error");
});


// Put update data in MongoDb
app.put('/', async (res, resp) => {

    console.log(res.body);
    let data = await DbConnect();
    let result = await data.updateOne(
        {name :res.body.name},
        {$set : res.body}
    );

    if (result.acknowledged)
        resp.send(res.body);
    else
        resp.send("error");
});

// Delete Method 1 data in MongoDb
app.delete('/', async (res, resp) => {

    console.log(res.body);
    let data = await DbConnect();
    let result = await data.deleteOne(
        {name :res.body.name}
    );

    if (result.acknowledged)
        resp.send(res.body);
    else
        resp.send("error");
});


// Delete Method 2 by mongodb id 
app.delete('/', async (res, resp) => {

    console.log(res.body);
    let data = await DbConnect();
    let result = await data.deleteOne(
        {_id : new mongodb.ObjectId(res.body._id)}
    );

    if (result.acknowledged)
        resp.send(res.body);
    else
        resp.send("error");
});



console.log("Server Started");
app.listen(3000);
