import User from '../models/User'

const index = async () => {
  try {
    const users = await User.find()

    return users
  } catch (error) {
    console.log(error)
  }
}

const show = async ({ id }) => {
  try {
    const user = await User.findById(id)

    return user
  } catch (error) {
    console.log(error)
  }
}

const store = async ({ data }) => {
  const existingUser = await User.findOne({ email: data.email })

  if (!existingUser) {
    const user = await User.create(user)

    return user
  }
}

export default { index, show, store }