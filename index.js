const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const Vaccination = require('./models/vaccinations')
//const Manufacturers = require('./models/manufacturers')


app.use(cors())




app.get('/api/vaccinations', (request, response) => {
    Vaccination.find({}).then(vaccinations => {
        response.json(vaccinations)
    })
})

app.get('/api/antiquas', (request, response) => {
   

   res.send('<h1>Hello World!</h1>')

})

 /*app.get('/api/solarbuddhicas', (request, response) => {
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


