const bodyParser = require('body-parser')
const tutors = require('./tutorsRoute')
const pets = require('./petsRoute')
const shelters = require('./sheltersRoute')
const adoptions = require('./adoptionsRoute')

module.exports = app => {
    app.use(
        bodyParser.json(),
        tutors,
        pets,
        shelters,
        adoptions
    ) 
}