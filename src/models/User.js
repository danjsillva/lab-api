import Mongoose from "mongoose";

const User = Mongoose.model(
  "User",
  Mongoose.Schema(
    {
      name: String,
      email: String,
      password: String,
      profile: String,
      interests: Array,
      deleted: Boolean,
      createdAt: Date,
      updatedAt: Date
    },
    {
      timestamps: true
    }
  )
);

export default User;
