import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import { PORT } from "./config.js"
import { Routers } from '../router/index.js'

const app = express()

export function runServer() {

    app.use(logger('dev'))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))

    Routers(app)

    app.listen(PORT, () => console.log(`server on at port ${PORT}`))
}
