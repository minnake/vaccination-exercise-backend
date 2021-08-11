const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const Vaccination = require('./models/vaccinations')
//const Manufacturers = require('./models/manufacturers')

app.use(express.static('build'))
app.use(cors())
app.use(express.json())

const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
}

app.use(requestLogger)

app.get('/api/vaccinations', (request, response) => {
    Vaccination.find({}).then(vaccinations => {
        response.json(vaccinations)
    })
})

/*app.get('/api/antiquas', (request, response) => {
    Manufacturers.find({}).then(antiquas => {
        response.json(antiquas)
    })
})

 app.get('/api/solarbuddhicas', (request, response) => {
    Manufacturers.find({}).then(solarbuddhicas => {
        response.json(solarbuddhicas)
    })
})
app.get('/api/zerpfies', (request, response) => {
    Manufacturers.find({}).then(zerpfies => {
        response.json(zerpfies)
    })
})
 */

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


