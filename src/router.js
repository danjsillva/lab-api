import Router from 'koa-router'

import AuthMiddleware from './middlewares/AuthMiddleware'
import AuthController from './controllers/AuthController'
import UserController from './controllers/UserController'

const router = new Router()

router.get('/', ctx => ctx.body = 'Hello World!')

router.post('/auth/signup', AuthController.signup)
router.post('/auth/login', AuthController.login)

router.get('/users', AuthMiddleware, UserController.index)
router.get('/users/:id', AuthMiddleware, UserController.show)
router.post('/users', AuthMiddleware, UserController.store)

export default router.routes()