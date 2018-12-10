const app = module.exports = require('express')()
const People = require(__basedir + '/services/people.service')

app.get('/', (req, res) => {
    People.getAll(req, res)
})

app.get('/:id', (req, res) => {
    People.get(req, res)
})

app.post('/', (req, res) => {
    People.save(req, res)
})

app.delete('/:id', (req, res) => {
    People.remove(req, res)
})