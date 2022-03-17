import dotenv from 'dotenv'

dotenv.config();
import './src/database'
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import home from './src/routes/home'
import user from './src/routes/user'
import token from './src/routes/token'

const whiteList = [
    'http://localhost:3000',
    'http://192.168.15.78:3000'
]

const corsOptions = {
    origin: function (origin,cb) {
        if(whiteList.indexOf(origin) != -1 || !origin) {
            cb(null, true)
        } else {
            cb(new Error('Bloqueado pelo CORS'))
        }
    },
    
    credentials:true
}

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors(corsOptions))
        this.app.use(helmet())
        this.app.use(express.urlencoded( {extended: true }))
        this.app.use(express.json())
    }

    routes() {
        this.app.use('/home', home)
        this.app.use('/user', user)
        this.app.use('/tokens', token)
    }
}

export default new App().app;