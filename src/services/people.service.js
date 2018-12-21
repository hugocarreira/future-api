import People from './../models/people.model'

module.exports = {

    async getAll(req, res) {
        await People.find((err, data) => {
            if(err) {
                res.status(500).send({result: data, error: err})                
            }
            res.status(200).send({result: data, error: err})
        })
    },
    
    async get(req, res) {
        await People.findById({'_id': req.params.id}, (err, data) => {
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
        await People.create(req.body, (err, data) => {
            if (err) {
                res.status(500).send({result: data, error: err})                
            }
            res.status(201).send({result: data, error: err})
        })    
    },
    
    async remove(req, res) {
        await People.deleteOne({'_id': req.params.id}, (err, data) => {
            if (err) {
                res.status(500).send({result: data, error: err})                
            }
            res.status(200).send({result: {success: true}, error: err})
        })
    },
    
}