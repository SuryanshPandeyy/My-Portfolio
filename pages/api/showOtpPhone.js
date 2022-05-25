import { MongoClient } from "mongodb";

async function handler(req, res) {
  let client;
   const connectionString = process.env.MONGODB_URI;

   client = await MongoClient.connect(connectionString);
   const db = client.db(process.env.mongodb_database);

  const reviews = await db
    .collection("otpPhone")
    .find()
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
