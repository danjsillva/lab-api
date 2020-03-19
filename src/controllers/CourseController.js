import CourseService from '../services/CourseService'

const index = async ctx => {
  const courses = await CourseService.index()

  ctx.body = courses
}

const show = async ctx => {
  const id = ctx.params.id
  
  const course = await CourseService.show({ id })

  ctx.body = course
}

const store = async ctx => {
  const data = ctx.request.body

  const course = await CourseService.store({ data })

  ctx.body = course
}

const update = async ctx => {
  const id = ctx.params.id
  const data = ctx.request.body

  const course = await CourseService.update({ id, data })

  ctx.body = course
}

const destroy = async ctx => {
  const id = ctx.params.id

  const course = await CourseService.destroy({ id })

  ctx.body = course
}

export default { index, show, store, update, destroy }