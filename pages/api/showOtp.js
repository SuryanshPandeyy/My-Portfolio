import { MongoClient } from "mongodb";
const bcrypt = require("bcryptjs");

async function handler(req, res) {
  if (req.method === "POST") {
    const { emailPhone, otpInputEmail } = req.body;

    let client;
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.l7odd.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    client = await MongoClient.connect(connectionString);
    const db = client.db();

    const collection = db.collection("users");

    const user = await collection.findOne({ email: emailPhone });
    if (bcrypt.compareSync(otpInputEmail, user.otpNum)) {
      res.status(200).json({
        success: true,
      });
    } else {
      res.status(409).json({
        success: false,
      });
    }
    client.close();
  }
}

export default handler;
