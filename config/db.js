import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const mongoURI = process.env.Mongo_Uri;
const connectDB = async () => {
    try {
      await mongoose.connect(mongoURI);
      console.log('MongoDB connected successfully');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
      process.exit(1); // Exit process with failure
    }
  };

export default connectDB;