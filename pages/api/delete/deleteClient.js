import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email } = req.body;
    let client;
     const connectionString = process.env.MONGODB_URI;

     client = await MongoClient.connect(connectionString);
     const db = client.db(process.env.mongodb_database);

    await db.collection("users").deleteMany({
      email,
    });

    client.close();

    const successdb = res.status(200).json({
      success: true,
    });
  }
};

export default handler;
