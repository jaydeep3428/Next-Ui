import mongoose from "mongoose";

const formdata_model = new mongoose.Schema({
  name: String,
  no: String,
  title: String,
  description: String,
  date: String,
  image: String,
  gender: String,
});

export const formdata =
  mongoose.models.UserData || mongoose.model("UserData", formdata_model);
