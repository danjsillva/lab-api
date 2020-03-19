import UserService from '../services/UserService'

const index = async ctx => {
  const users = await UserService.index()

  ctx.body = users
}

const show = async ctx => {
  const id = ctx.params.id
  
  const user = await UserService.show({ id })

  ctx.body = user
}

const store = async ctx => {
  const data = ctx.request.body

  const user = await UserService.store({ data })

  ctx.body = user
}

const update = async ctx => {
  const id = ctx.params.id
  const data = ctx.request.body

  const user = await UserService.update({ id, data })

  ctx.body = user
}

const destroy = async ctx => {
  const id = ctx.params.id

  const user = await UserService.destroy({ id })

  ctx.body = user
}

export default { index, show, store, update, destroy }