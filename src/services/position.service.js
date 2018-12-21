import Position from './../models/position.model'

module.exports = {

    async getAll(req, res) {
        await Position.find((err, data) => {
            if(err) {
                res.status(500).send({result: data, error: err})                
            }
            res.status(200).send({result: data, error: err})
        })
    },
    
    async get(req, res) {
        await Position.findById({'_id': req.params.id}, (err, data) => {
            if (err) {
                res.status(500).send({result: data, error: err})                
            }
            if (data == null) {
                res.status(404).send({result: 'not found', error: err})                
            }
            res.status(200).send({result: data, error: err}) 
        })
    },
    
    async save(req, res) {
        await Position.create(req.body, (err, data) => {
            if (err) {
                res.status(500).send({result: data, error: err})                
            }
            res.status(201).send({result: data, error: err})
        })    
    },
    
    async remove(req, res) {
        await Position.deleteOne({'_id': req.params.id}, (err, data) => {
            if (err) {
                res.status(500).send({result: data, error: err})                
            }
            res.status(200).send({result: {success: true}, error: err})
        })
    },

}