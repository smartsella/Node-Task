import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connects = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Succfully connected DB ${connects.connection.host}`);
  } catch (error) {
    console.log("Error msg", error.message);
  }
};

export default connectDB;
