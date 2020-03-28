import Mongoose from "mongoose";

export const UserSchema = Mongoose.Schema(
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
);

const User = Mongoose.model("User", UserSchema);

export default User;
