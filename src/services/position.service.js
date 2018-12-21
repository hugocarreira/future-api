import Position from './../models/position.model'

module.exports = {

    getAll(req, res) {
        Position.find((err, data) => {
            if(err) {
                res.status(500).json({result: null, error: err})
                return
            }
            res.json({result: data})
        })
    },
    
    get(req, res) {
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
    },
    
    save(req, res) {
        Position.create(req.body, (err, data) => {
            if (err) {
                res.json({result: null, error: err})
                return
            }
            res.status(201).json({result: data, error: null})
        })    
    },
    
    remove(req, res) {
        Position.deleteOne({'_id': req.params.id}, (err, data) => {
            if (err) {
                res.json({result: null, error: err})
                return
            }
            res.status(200).json({result: {success: true}, error: null})
        })
    },


    getAll(req, res) {
        Position.find((err, data) => {
            if(err) {
                res.status(500).json({result: null, error: err})
                return
            }
            res.json({result: data})
        })
    },

    get(req, res) {
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
    },

    save(req, res) {
        Position.create(req.body, (err, data) => {
            if (err) {
                res.json({result: null, error: err})
                return
            }
            res.status(201).json({result: data, error: null})
        })    
    },

    remove(req, res) {
        Position.deleteOne({'_id': req.params.id}, (err, data) => {
            if (err) {
                res.json({result: null, error: err})
                return
            }
            res.status(200).json({result: {success: true}, error: null})
        })
    },

}