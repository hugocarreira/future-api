const mongoose = require('mongoose')
const log = require('consola')

mongoose.connect('mongodb://127.0.0.1:27017/future', { useNewUrlParser: true }, (err)=> {  
  if (err) {
    log.error(new Error(err))
  }
});

mongoose.connection.on('connected', ()=> {
  log.success('MongoDb Development connected')
});

mongoose.connection.on('error', (err) => {
  log.error(new Error(err))
});

mongoose.Promise = Promise;