const mongoose = require('mongoose')
const People = require(__basedir + '/models/people.model')

function getAll(req, res) {
    People.find((err, data) => {
        if(err) {
            res.status(404).send('not found')
        }
        res.json(data)  
    })
}

module.exports = { getAll }