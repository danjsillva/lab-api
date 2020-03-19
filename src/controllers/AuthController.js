import AuthService from '../services/AuthService'

const signup = async ctx => {
  const data = ctx.request.body
  
  if (!data.email) throw new Error('Email é obrigatório')
  if (!data.password) throw new Error('Password é obrigatório')
  
  const auth = await AuthService.signup({ data })

  ctx.body = auth
}

const login = async ctx => {
  const { email, password } = ctx.request.body
  
  if (!email) throw new Error('Email é obrigatório')
  if (!password) throw new Error('Password é obrigatório')

  const auth = await AuthService.login({ email, password })

  ctx.body = auth
}

const logout = async ctx => {
  const auth = await AuthService.logout({ email, password })

  ctx.body = auth
}

export default { signup, login, logout }