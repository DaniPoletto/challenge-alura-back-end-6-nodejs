const bodyParser = require('body-parser')
const tutors = require('./tutorsRoute')

module.exports = app => {
    app.use(
        bodyParser.json(),
        tutors
    )  
    app.get('/', (req, res) => res.send('Hello!'))
}