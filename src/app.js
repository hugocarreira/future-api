import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import * as log from 'consola'

// Config
import config from './config/config'
import mgo from './config/mongodb'

// Routes
import routes from './routes/routes'

// Application
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/static', express.static('./static/'))
app.use(cors({origin: "*"}))
app.use(morgan('tiny'))

app.use(routes)

process.on('uncaughtException', function (err) {
    log.error(new Error(err))
})

app.listen(config.port, () => {
    log.info('Running at', config.port)    
})