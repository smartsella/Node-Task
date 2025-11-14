import mongoose from "mongoose";

const connectdb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Succfully DB Connected ${connect.connection.host}`);
  } catch (error) {
    console.log("Error msgsg", error.message);
  }
};
export default connectdb;
