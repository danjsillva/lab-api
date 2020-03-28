import Mongoose from "mongoose";

export const LessonSchema = Mongoose.Schema(
  {
    name: String,
    description: String,
    summary: String,
    type: String,
    link: String,
    deleted: Boolean,
    createdAt: Date,
    updatedAt: Date
  },
  {
    timestamps: true
  }
);

const Lesson = Mongoose.model("Lesson", LessonSchema);

export default Lesson;
