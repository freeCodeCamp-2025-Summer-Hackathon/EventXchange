import mongoose from "mongoose";

const dbName = process.env.DB_NAME
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

/**
 * Connects to the database.
 */
export async function dbConnect() {
  const uri = `mongodb+srv://${dbUser}:${dbPass}@cluster0.ga86qql.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;
  await mongoose.connect(uri);
}
