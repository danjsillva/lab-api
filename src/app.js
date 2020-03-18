import Koa from 'koa'
import Dotenv from 'dotenv'
import BodyParser from 'koa-bodyparser'
import Mongoose from 'mongoose'

import ErrorMiddleware from './middlewares/ErrorMiddleware'
import Routes from './router'

Dotenv.config()

Mongoose.connect(process.env.MONGO_CONNECTION, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

const app = new Koa();

app.use(BodyParser())
app.use(ErrorMiddleware)
app.use(Routes)

export default app