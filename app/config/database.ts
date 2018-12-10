import * as mongoose from 'mongoose'
import log from 'consola'

class Database {

    private MONGO_CONNECTION;
    private MONGO_URI = 'mongodb://127.0.0.1:27017/future';

    constructor() {         
    }

    createConnection() {

        if (process.env.NODE_ENV == 'production') {
            mongoose.connect(this.MONGO_URI, { useNewUrlParser: true }, (err) => {  
                if (err) {
                    log.error(err.message)
                }
            });
        } else {
            mongoose.connect(this.MONGO_URI, { useNewUrlParser: true }, (err) => {  
                if (err) {
                    log.error(err.message)
                }
            });
        }
    }

}

export default Database