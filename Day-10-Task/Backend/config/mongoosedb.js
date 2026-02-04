import mongoose from "mongoose";

const connectdb = async () => {
  try {
    const connects = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connecting Mongoose server${connects.connection.host}`);
  } catch (error) {
    console.log(`eoror msg${error.message}`);
  }
};
export default connectdb;
