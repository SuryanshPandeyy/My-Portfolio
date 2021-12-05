import { MongoClient } from "mongodb";

async function handler(req, res) {
  let client;
  const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.l7odd.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

  client = await MongoClient.connect(connectionString);
  const db = client.db();

  const reviews = await db.collection("users");
  const feedback = reviews
    ? reviews.hasOwnProperty("feedback")
      ? true
      : false
    : null;

  if (feedback) {
    const user = reviews
      .find({ feedback })
      .sort({
        published: -1,
      })
      .toArray();

    res.status(200).json({
      message: JSON.parse(JSON.stringify(reviews)),
      success: true,
    });
  } else {
    res.status(404);
  }
}

export default handler;
