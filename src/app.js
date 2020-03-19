import Koa from 'koa'
import Dotenv from 'dotenv'
import Cors from '@koa/cors'
import BodyParser from 'koa-bodyparser'

import Database from './config/database'
import ErrorMiddleware from './middlewares/ErrorMiddleware'
import Routes from './router'

Dotenv.config()
Database.connect()

const app = new Koa();

app.use(Cors())
app.use(BodyParser())
app.use(ErrorMiddleware)
app.use(Routes)

export default app