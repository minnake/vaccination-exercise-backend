const mongoose = require('mongoose')


const vaccineSchema = new mongoose.Schema({
    id: String,
    sourceBottle: String,
    gender: String,
    vaccinationDate: Date
})

vaccineSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
    }
})

module.exports = mongoose.model('Vaccination', vaccineSchema)