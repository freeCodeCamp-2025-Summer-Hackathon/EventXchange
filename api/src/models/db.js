import mongoose from 'mongoose';

/**
 * Connects to the database.
 */
export async function dbConnect() {
  const dbName = process.env.DB_NAME;
  const user = process.env.DB_USER;
  const pass = process.env.DB_PASS;
  const uri = `mongodb+srv://${user}:${pass}@cluster0.ga86qql.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;
  await mongoose.connect(uri);
}

/**
 * Disconnects from the database.
 */
export async function dbDisconnect() {
  await mongoose.disconnect();
}
