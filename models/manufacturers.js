const mongoose = require('mongoose')



const itemSchema = new mongoose.Schema({
    id: String,
    orderNumber: String,
    responsiblePerson: String,
    healthCareDistrict: String,
    vaccine: String,
    injections: String,
    arrived: String,
})

itemSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
    }
})

module.exports = mongoose.model('Manufacturers', itemSchema)