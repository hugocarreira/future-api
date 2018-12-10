const mongoose = require('mongoose')
const SCHEMA = mongoose.Schema

const PEOPLE_SCHEMA = new SCHEMA({
    first_name: { type: String },
    last_name: { type: String },
    image: { type: String },
    email: { type: String }
}, { collection: 'peoples' })


const People = mongoose.model('People', PEOPLE_SCHEMA)
module.exports = People