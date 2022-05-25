import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  let client;
  const connectionString = process.env.MONGODB_URI;

  client = await MongoClient.connect(connectionString);
  const db = client.db(process.env.mongodb_database);

  const reviews = await db.collection("users");
  const feedback = reviews
    ? reviews.hasOwnProperty("feedback")
      ? true
      : false
    : null;

  if (feedback) {
    reviews
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
