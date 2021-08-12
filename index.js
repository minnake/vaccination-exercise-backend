const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const Vaccination = require('./models/vaccinations')
const Manufacturers = require('./models/manufacturers')


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
   try {
        await  Manufacturers.find({}).then(antiquas => {
        response.json(antiquas)
    })
      } catch (err) {
          console.log(err)
        // Without `exec()`, the stack trace does **not** include the
        // calling code. Below is the stack trace:
        //
        // CastError: Cast to ObjectId failed for value "this is not a valid id" at path "_id" for model "band-promises"
        //   at new CastError (/app/node_modules/mongoose/lib/error/cast.js:29:11)
        //   at model.Query.exec (/app/node_modules/mongoose/lib/query.js:4331:21)
        //   at model.Query.Query.then (/app/node_modules/mongoose/lib/query.js:4423:15)
        //   at process._tickCallback (internal/process/next_tick.js:68:7)
        err.stack;
      }
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


