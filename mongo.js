const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://minna:${password}@cluster0.hujxy.mongodb.net/vaccination-exercise?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const itemSchema = new mongoose.Schema({
    id: String,
    sourceBottle: String,
    gender: String,
    vaccinationDate: String,
})

const Zerpfy = mongoose.model('Zerpfy', itemSchema)

const zerpfy = new Zerpfy({
    sourceBottle: "test bottle 1",
    gender: "nonbinary",
    vaccinationDate: "2021-01-01T00:00:00.670958Z",
})

zerpfy.save().then(response => {
    console.log('item saved!')
    mongoose.connection.close()
})


/* SolarBuddhica.find({}).then(result => {
    result.forEach(solarBuddhica => {
        console.log(solarBuddhica)
    })
    mongoose.connection.close()
}) */