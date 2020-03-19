import SettingService from '../services/SettingService'

const show = async ctx => {
  const setting = await SettingService.show()

  ctx.body = setting
}

const update = async ctx => {
  const data = ctx.request.body

  const setting = await SettingService.update({ data })

  ctx.body = setting
}

export default { show, update }