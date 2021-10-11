import { MongoClient } from "mongodb";

async function handler(req, res) {
    let client;
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.l7odd.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    client = await MongoClient.connect(connectionString);
    const db = client.db();

    const reviews = await db
      .collection("users")
      .find({})
      .sort({
        published: -1,
      })
      .toArray();

    res.json({
      message: JSON.parse(JSON.stringify(reviews)),
      success: true,
    });
}

export default handler;
