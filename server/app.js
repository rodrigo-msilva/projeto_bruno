import dotenv from 'dotenv'

dotenv.config();
import './src/database'
import express from 'express';
import home from './src/routes/home'
class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.urlencoded( {extended: true }))
    }

    routes() {
        this.app.use('/home', home)
    }
}

export default new App().app;