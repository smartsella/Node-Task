import mongoose from "mongoose";

const planetSchema = new mongoose.Schema({
  planetname: { type: String },
  planetage: { type: String },
  planetplace: { type: String },
  planetcolour: { type: String },
});

export default mongoose.model("planet", planetSchema);
