import Mongoose from "mongoose";

import { LessonSchema } from "./Lesson";

export const CourseSchema = Mongoose.Schema(
  {
    name: String,
    description: String,
    category: String,
    tags: Array,
    trailer: String,
    summary: String,
    requirements: String,
    lessons: [LessonSchema],
    feedbacks: Array,
    user: { type: Mongoose.Schema.Types.ObjectId, ref: "User" },
    deleted: Boolean,
    createdAt: Date,
    updatedAt: Date
  },
  {
    timestamps: true
  }
);

const Course = Mongoose.model("Course", CourseSchema);

export default Course;
