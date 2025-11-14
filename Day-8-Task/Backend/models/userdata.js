import mongoose from "mongoose";

const loginuser = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
});

const finaluser = mongoose.model("user", loginuser);

export default finaluser;
