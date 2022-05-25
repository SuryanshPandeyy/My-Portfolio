import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  let client;
  const connectionString = process.env.MONGODB_URI;

  client = await MongoClient.connect(connectionString);
  const db = client.db(process.env.mongodb_database);

  const skills = await db.collection("skills").find({}).sort({}).toArray();

  res.status(200).json({
    message: JSON.parse(JSON.stringify(skills)),
    success: true,
  });
}

export default handler;
