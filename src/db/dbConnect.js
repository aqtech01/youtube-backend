import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDb = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log("DB Connect SuccessFully");
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
