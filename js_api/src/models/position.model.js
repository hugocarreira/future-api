const mongoose = require('mongoose')
const SCHEMA = mongoose.Schema

const POSITION_SCHEMA = new SCHEMA({
    title: { type: String },
    description: { type: String },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
}, { collection: 'positions' })


const Position = mongoose.model('Position', POSITION_SCHEMA)
module.exports = Position