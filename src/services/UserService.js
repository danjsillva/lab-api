import Bcrypt from 'bcrypt'

import User from '../models/User'

const index = async () => {
  const users = await User.find()

  return users
}

const show = async ({ id }) => {
  const user = await User.findById(id)

  return user
}

const store = async ({ data }) => {
  const user = await User.create(data)

  return user
}

const update = async ({ id, data }) => {
  if (data.password) {
    data.password = Bcrypt.hashSync(data.password, 10);
  }

  const user = await User.findByIdAndUpdate(id, data, { new: true })

  return user
}

const destroy = async ({ id }) => {
  const user = await User.findByIdAndUpdate(id, { deleted: true }, { new: true })

  return user
}

export default { index, show, store, update, destroy }