import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    const userName = req.body.name;
    const userPhone = req.body.phone;
    const userMessage = req.body.message;

    let client;

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.l7odd.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    client = await MongoClient.connect(connectionString);
    const db = client.db();

    await db.collection("users").insertOne({
      email: userEmail,
      name: userName,
      phone: userPhone,
      message: userMessage,
    });

    client.close();

    const successw = res.status(200).json({
      success: true,
    });
    console.log(successw);
  }
}

export default handler;
