import mongoose from "mongoose";

const connectDB = async () => {
  console.log("connecting to DB ...");
  if (mongoose.connections[0].readyState) return;
  mongoose.set("strictQuery", false);
  await mongoose.connect(process.env.MONGO_URI);
  console.log("DB connected");
};

export default connectDB;
