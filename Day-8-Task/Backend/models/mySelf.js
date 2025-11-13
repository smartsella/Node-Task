import mongoose from "mongoose";

const mySelf = new mongoose.Schema({
  name: { type: String, required: true },
  age: String,
  role: String,
  native: String,
});

const mySelfmodel = mongoose.model("myselfdata", mySelf);

export default mySelfmodel;
