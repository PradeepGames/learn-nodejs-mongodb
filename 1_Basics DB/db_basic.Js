const DbConnect = require('./mongodb.js');


// Read data from MongoDb
const ReadDataDB = async () => {
    let data = await DbConnect();
    data = await data.find({ name: 'Rao' }).toArray();
    console.warn(data);
};

// Insert data in MongoDb
const InsertDataDB = async () => {
    let db = await DbConnect();
    const result = await db.insertMany(  // insertMany(Array Json Object) , insertOne(Single json object)
        [
            { name: 'Rahul', age: 34, mobile: 9655747474 },
            { name: 'Dev', age: 34, mobile: 9655747474 }
        ]
    )
    if (result.acknowledged) {  // check data is inserted or not in db
        console.warn('data inserted');
    }
};

// Update data in MongoDb
const UpdateDataDB = async () => {
    let data = await DbConnect();
    let result = await data.updateOne(
        { name: "Rao" }, { $set: { name: 'Raju' } }
    )
    console.warn(result);
};

// Delete data in MongoDb
const DeleteDataDB = async () => {
    let data = await DbConnect();
    let result = await data.deleteMany(
        { name: 'Dev' }
    )
    if (result.acknowledged && result.deletedCount >0) {  // check data is inserted or not in db
        console.warn('deleted data');
    }
};

ReadDataDB();
//InsertDataDB();
//UpdateDataDB();
//DeleteDataDB();