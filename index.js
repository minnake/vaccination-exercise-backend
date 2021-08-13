const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const { Antiqua, SolarBuddhica, Zerpfy, Vaccination } = require('./models/vaccinations')

const mongoose = require('mongoose')

app.use(cors())

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })


app.get('/api/vaccinations', (request, response) => {
    Vaccination.find({}).then(vaccinations => {
        response.json(vaccinations)
    })
})

app.get('/api/antiquas', (request, response) => {
    Antiqua.find({}).then(antiquas => {
        response.json(antiquas)
    })
})

app.get('/api/solarbuddhicas', (request, response) => {
    SolarBuddhica.find({}).then(solarbuddhicas => {
        response.json(solarbuddhicas)
    })
})

app.get('/api/zerpfies', (request, response) => {
    Zerpfy.find({}).then(zerpfies => {
        response.json(zerpfies)
    })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

