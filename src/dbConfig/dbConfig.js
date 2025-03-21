import mongoose from "mongoose";
import DB_NAME from "./constants";

async function connect() {
  try {
    console.log("Attempting to connect to MongoDB...");
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Mongo Connected");
    });
    connection.on("error", (err) => {
      console.log("Mongo Connection Error", err);
    });
  } catch (error) {
    console.log("Something went wrong with your db connection", error.message);
  }
}

export default connect;
