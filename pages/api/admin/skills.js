import { MongoClient } from "mongodb";
const bcrypt = require("bcryptjs");

async function handler(req, res) {
  if (req.method === "POST") {
    const { value } = req.body;

    let client;
    const connectionString = process.env.MONGODB_URI;

    client = await MongoClient.connect(connectionString);
    const db = client.db(process.env.mongodb_database);

    const collection = db.collection("skills");

    await collection.insertOne({ value });
   res.status(200).json({
     success: true,
   });
    client.close();
  }
}

export default handler;
