import Mongoose from "mongoose";

export const SettingSchema = Mongoose.Schema(
  {
    name: String
  },
  {
    timestamps: true
  }
);

const Setting = Mongoose.model("Setting", SettingSchema);

export default Setting;
