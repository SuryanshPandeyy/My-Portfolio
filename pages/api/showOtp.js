import { MongoClient } from "mongodb";
const bcrypt = require("bcryptjs");

async function handler(req, res) {
  if (req.method === "POST") {
    const { emailPhone, otpInputEmail } = req.body;

    let client;
    const connectionString = process.env.MONGODB_URI;

    client = await MongoClient.connect(connectionString);
    const db = client.db(process.env.mongodb_database);

    const collection = db.collection("users");

    const user = await collection.findOne({ email: emailPhone });
    if (bcrypt.compareSync(otpInputEmail, user.otpNum)) {
      res.status(200).json({
        success: true,
      });
    } else {
      res.status(404).json({
        success: false,
      });
    }
    client.close();
  }
}

export default handler;
