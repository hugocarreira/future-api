import * as express from 'express'
import * as morgan from 'morgan'
import * as bodyParser from 'body-parser'
import * as log from 'consola'

class App {

    public app: express.Application;
    private morgan: morgan.Morgan;
    private log;
    private bodyParser;

    constructor() {
        this.app = express();        
    }
}