import mongoose from 'mongoose'

const SCHEMA = mongoose.Schema

const POSITION_SCHEMA = new SCHEMA({
    title: { type: String },
    description: { type: String }    
}, { timestamps: true, collection: 'positions' })

const Position = mongoose.model('Position', POSITION_SCHEMA)

export default Position