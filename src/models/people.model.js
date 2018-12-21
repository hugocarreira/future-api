import mongoose from 'mongoose'

const SCHEMA = mongoose.Schema

const PEOPLE_SCHEMA = new SCHEMA({
    first_name: { type: String },
    last_name: { type: String },
    image: { type: String },
    email: { type: String }
}, { timestamps: true, collection: 'peoples' })


const People = mongoose.model('People', PEOPLE_SCHEMA)

export default People