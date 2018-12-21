import mongoose from 'mongoose'
import config from './config'
import * as log from 'consola'

const bindDB = `mongodb://${config.mongo.host}:${config.mongo.port}/${config.mongo.database}`

mongoose.connect(bindDB, { 
  useNewUrlParser: true, 
  useFindAndModify: false, 
  useCreateIndex: true }, (err) => {  
  if (err) {
    log.error(new Error(err))
  }
})

mongoose.Promise = global.Promise

const mgoConnection = mongoose.connection

mgoConnection.on('connected', () => {
  log.success('MongoDb connected')
})

mgoConnection.on('error', (err) => {
  log.error(new Error(err))
})