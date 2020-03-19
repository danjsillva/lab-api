import Setting from '../models/Setting'

const show = async () => {
  const setting = await Setting.findOne()

  return setting
}

const update = async ({ data }) => {
  const setting = await Setting.findOneAndUpdate({}, data)

  return setting
}

export default { show, update }