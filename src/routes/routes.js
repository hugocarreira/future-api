const app = module.exports = require('express')()

app.get('/', (req, res) => {
    res.send({msg: 'Future is coming...'})
})

app.use('/v1/people', require('./handlers/people.handler'))
app.use('/v1/position', require('./handlers/position.handler'))

app.all('*', (req, res) => {
    res.status(404).send({msg: 'not found'})
})

export default app