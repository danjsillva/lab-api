import Course from "../models/Course";

const index = async () => {
  const courses = await Course.find();

  return courses;
};

const show = async ({ id }) => {
  const course = await Course.findById(id);

  return course;
};

const store = async ({ data }) => {
  const course = await Course.create(data);

  return course;
};

const update = async ({ id, data }) => {
  const course = await Course.findByIdAndUpdate(id, data, { new: true });

  return course;
};

const destroy = async ({ id }) => {
  const course = await Course.findByIdAndUpdate(
    id,
    { deleted: true },
    { new: true }
  );

  return course;
};

export default { index, show, store, update, destroy };
