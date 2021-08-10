const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const Vaccination = require('./models/vaccinations')

// ÄLÄ KOSKAAN TALLETA SALASANOJA githubiin!
const url =
    'mongodb+srv://minna:testi123@cluster0.hujxy.mongodb.net/vaccination-exercise?retryWrites=true&w=majority'

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const itemSchema = new mongoose.Schema({
    id: String,
    sourceBottle: String,
    gender: String,
    vaccinationDate: String
})

itemSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
    }
})

const Vaccination = mongoose.model('Vaccination', itemSchema)

app.get('/api/vaccinations', (request, response) => {
    Vaccination.find({}).then(vaccinations => {
        response.json(vaccinations)
    })
})

/* async function main() {
    const uri = "mongodb+srv://minna:testi123@cluster0.hujxy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    const client = new MongoClient(uri)

    try {
        await client.connect()
        await listDatabases(client)
        await findOneListingByName(client)
    } catch (e) {
        console.log(e)
    } finally {
        await client.close()
    }
}

main().catch(console.error)

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases()

    console.log("Databases: ")
    databasesList.databases.forEach(db => console.log(` - ${db.name}`))
}

async function findOneListingByName (client, nameOfListing) {
    const result = await client.db("Vaccinations").collection("Antiqua").findOne()

    if (result) {
        console.log(`Found a listing in the collection with the name: `);
        console.log(result);
    } else {
        console.log(`No listings found with the name`);
    }
} */


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


app.use(cors())