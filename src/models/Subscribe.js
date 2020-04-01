import Mongoose from "mongoose";

export const SubscribeSchema = Mongoose.Schema(
  {
    user: { type: Mongoose.Schema.Types.ObjectId, ref: "User" },
    course: { type: Mongoose.Schema.Types.ObjectId, ref: "Course" },
    lesson: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "Lesson",
      default: null
    },
    deleted: Boolean,
    createdAt: Date,
    updatedAt: Date
  },
  {
    timestamps: true
  }
);

const Subscribe = Mongoose.model("Subscribe", SubscribeSchema);

export default Subscribe;
