const People = require(__basedir + '/models/people.model')

function getAll(req, res) {
    People.find((err, data) => {
        if(err) {
            res.status(500).json({result: null, error: err})
            return
        }
        res.json({result: data})
    })
}

function get(req, res) {
    People.findById({'_id': req.params.id}, (err, data) => {
        if (err) {
            res.status(500).json({result: null, error: err})
            return
        }
        if (data == null) {
            res.status(404).json({result: 'not found', error: null})
            return
        }
        res.status(200).json({result: data, error: null}) 
    })
}

function save(req, res) {
    People.create(req.body, (err, data) => {
        if (err) {
            res.json({result: null, error: err})
            return
        }
        res.status(201).json({result: data, error: null})
    })    
}

function remove(req, res) {
    People.deleteOne({'_id': req.params.id}, (err, data) => {
        if (err) {
            res.json({result: null, error: err})
            return
        }
        res.status(200).json({result: {success: true}, error: null})
    })
}

module.exports = { getAll, get, save, remove }