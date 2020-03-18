import UserService from '../services/UserService'

const index = async ctx => {
  const users = await UserService.index()

  ctx.body = users
}

const show = async ctx => {
  const user = await UserService.show({ id: ctx.params.id })

  ctx.body = user
}

const store = async ctx => {
  const user = await UserService.store({ data: ctx.request.body})

  ctx.body = user
}

export default { index, show, store }