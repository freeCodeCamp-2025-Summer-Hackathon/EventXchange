export function dbUri() {
  const dbName = process.env.DB_NAME;
  const user = process.env.DB_USER;
  const pass = process.env.DB_PASS;
  const cluster = process.env.DB_CLUSTER;
  // return whichever works best for you
  const uri = `mongodb+srv://${user}:${pass}@cluster0.ga86qql.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;
  const uri2 = process.env.MONGO_URL;
  return uri2;
}
