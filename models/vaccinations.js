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

const itemSchema = new mongoose.Schema({
    id: String,
    orderNumber: Number,
    responsiblePerson: String,
    healthCareDistrict: String,
    vaccine: String,
    injections: Number,
    arrived: Date,
})

const Antiqua = mongoose.model("Antiqua", itemSchema)
const SolarBuddhica = mongoose.model("SolarBuddhica", itemSchema)
const Zerpfy = mongoose.model("Zerpfy", itemSchema)
const Vaccination = mongoose.model('Vaccination', vaccineSchema)

module.exports = { Antiqua, SolarBuddhica, Zerpfy, Vaccination }
