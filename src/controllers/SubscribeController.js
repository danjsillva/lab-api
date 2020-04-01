import SubscribeService from "../services/SubscribeService";

const index = async ctx => {
  const subscribies = await SubscribeService.index();

  ctx.body = subscribies;
};

const show = async ctx => {
  const id = ctx.params.id;

  const subscribe = await SubscribeService.show({ id });

  ctx.body = subscribe;
};

const store = async ctx => {
  const data = ctx.request.body;

  const subscribe = await SubscribeService.store({ data });

  ctx.body = subscribe;
};

const update = async ctx => {
  const id = ctx.params.id;
  const data = ctx.request.body;

  const subscribe = await SubscribeService.update({ id, data });

  ctx.body = subscribe;
};

const destroy = async ctx => {
  const id = ctx.params.id;

  const subscribe = await SubscribeService.destroy({ id });

  ctx.body = subscribe;
};

export default { index, show, store, update, destroy };
