const app = module.exports = require('express')()
const log = require('consola')

app.get('/', (req, res) => {
    res.send({msg: 'Future is coming...'})
})

app.use('/people', require('./handlers/people.handler'))

app.all('*', (req, res) => {
    res.status(404).send({msg: 'not found'})
})