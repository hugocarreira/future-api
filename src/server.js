const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const log = require('consola')

// Config
const config = require('./config/config')
global.__basedir = __dirname;

// Routes
const routes = require('./routes/routes')

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