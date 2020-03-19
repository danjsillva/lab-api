import Bcrypt from 'bcrypt'
import JWT from 'jsonwebtoken'

import User from '../models/User'

const signup = async ({ data }) => {
  const existingUser = await User.findOne({ email: data.email })

  if (existingUser) throw new Error('Este email já está cadastrado')

  data.password = Bcrypt.hashSync(data.password, 10);
  const user = await User.create(data)

  return user
}

const login = async ({ email, password }) => {
  const user = await User.findOne({ email })

  if (!user) throw new Error('Email não econtrado')
  if (!Bcrypt.compareSync(password, user.password)) throw new Error('Senha incorreta')

  const token = JWT.sign(user.toJSON(), process.env.JWT_SECRET, { expiresIn: 604800 });

  return { user, token }
}

const logout = async ({ email, password }) => {

}

export default { signup, login, logout }