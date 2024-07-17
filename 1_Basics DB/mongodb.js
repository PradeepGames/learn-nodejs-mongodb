const { MongoClient } = require("mongodb");
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const databaseName = 'LearnDB';


async function DbConnect() {
    let result = await client.connect();
    let db = result.db(databaseName);
    return db.collection('User');

    // let response = await collection.find({}).toArray();
    // console.log(response);
}

//Read Method 1 bewlo
// DbConnect().then((resp) => {
//     resp.find().toArray().then((data) => {
//         console.log(data);
//     });
// });

//Read Method 2 below
// const main = async ()=> {
//     let data = await DbConnect();
//     data = await data.find().toArray();
//     console.warn(data);
// };

//main();

module.exports = DbConnect;