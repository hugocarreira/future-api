const Position = require(__basedir + '/models/position.model')

function getAll(req, res) {
    Position.find((err, data) => {
        if(err) {
            res.status(500).json({result: null, error: err})
            return
        }
        res.json({result: data})
    })
}

function get(req, res) {
    Position.findById({'_id': req.params.id}, (err, data) => {
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
    Position.create(req.body, (err, data) => {
        if (err) {
            res.json({result: null, error: err})
            return
        }
        res.status(201).json({result: data, error: null})
    })    
}

function remove(req, res) {
    Position.deleteOne({'_id': req.params.id}, (err, data) => {
        if (err) {
            res.json({result: null, error: err})
            return
        }
        res.status(200).json({result: {success: true}, error: null})
    })
}

module.exports = { getAll, get, save, remove }