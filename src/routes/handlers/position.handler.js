import Position from './../../services/position.service'

const app = module.exports = require('express')()

app.get('/', (req, res) => {
    Position.getAll(req, res)
})

app.get('/:id', (req, res) => {
    Position.get(req, res)
})

app.post('/', (req, res) => {
    Position.save(req, res)
})

app.delete('/:id', (req, res) => {
    Position.remove(req, res)
})