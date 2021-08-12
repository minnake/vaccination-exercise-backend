const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://minna:testi123@cluster0.hujxy.mongodb.net/vaccination-exercise?retryWrites=true")

const connection = mongoose.connection
connection.on('error', console.error.bind(console, 'connection error: '))
connection.once('open', function () {
    connection.db.collection("antiquas", function(err,collection) {
        collection.find({}).toArray(function(err,data) {
            console.log(data)
        })
    })
})

 /*module.exports = function connectionFactory() {
    //const conn = mongoose.createConnection(progress.env.MONGODB_URI)
    const url = process.env.MONGODB_URI

    console.log('connecting to', url)

    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
        .then(result => {
            console.log('connected to MongoDB')
        })
        .catch((error) => {
            console.log('error connecting to MongoDB:', error.message)
        })

    conn.model('Vaccination', require('../models/vaccinations'))
    conn.model('Manufacturers', require('../models/manufacturers'))

    return conn
}
 */


/* const {MongoClient} = require('mongodb');

async function main() {
    //const uri = "mongodb://minna:testi123@datalake0-hujxy.a.query.mongodb.net/vaccination-exercise-db?ssl=true&authSource=admin";
    const uri = "mongodb+srv://minna:testi123@cluster0.hujxy.mongodb.net/vaccination-exercise?retryWrites=true"
 
    const client = new MongoClient(uri)

    try {
        await client.connect();
        await listDatabases(client);
        await findOrderNumberOne(client)

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function findOrderNumberOne(client) {
    const result = await client.db("vaccination-exercise").collection("antiquas").findOne({orderNumber: 1})

    if (result) {
        console.log('Found a order with number 1.') 
        console.log(result)
    } else {
        console.log('Not found any order with number 1.')
    }
}

main().catch(console.error);
 */
