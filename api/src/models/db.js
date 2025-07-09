import mongoose from "mongoose";

const dbName = process.env.DB_NAME
const user = process.env.DB_USER
const pass = process.env.DB_PASS

/**
 * Connects to the database.
 */
export async function dbConnect() {
  const uri = `mongodb+srv://cluster0.ga86qql.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
  await mongoose.connect(uri, {
    dbName,
    user,
    pass,
  });
}
