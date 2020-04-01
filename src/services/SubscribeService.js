import Subscribe from "../models/Subscribe";

const index = async () => {
  const subscribies = await Subscribe.find()
    .populate("user")
    .populate("course");

  return subscribies;
};

const show = async ({ id }) => {
  const subscribe = await Subscribe.findById(id)
    .populate("user")
    .populate("course");

  return subscribe;
};

const store = async ({ data }) => {
  const subscribe = await Subscribe.create(data);

  return subscribe;
};

const update = async ({ id, data }) => {
  const subscribe = await Subscribe.findByIdAndUpdate(id, data, { new: true });

  return subscribe;
};

const destroy = async ({ id }) => {
  const subscribe = await Subscribe.findByIdAndUpdate(
    id,
    { deleted: true },
    { new: true }
  );

  return subscribe;
};

export default { index, show, store, update, destroy };
