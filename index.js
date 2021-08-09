const express = require('express')
const app = express()

let notes = [
    { test: "hello" }
]

app.get('/', (req, res) => {
    res.send('<h2>Hello World</h2>')
})


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})