import { MongoClient } from "mongodb";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

const handlerOtp = async (req, res) => {
  if (req.method === "POST") {
    const { phone, otpNum } = req.body;
    await client.verify
      .services("VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
      .verificationChecks.create({ to: phone, code: otpNum })
      .then((verification_check) => console.log(verification_check.status));

    let clientDb;
     const connectionString = process.env.MONGODB_URI;

  client = await MongoClient.connect(connectionString);
  const db = client.db(process.env.mongodb_database);

    await db.collection("otp").updateOne(
      { phone: phone },
      {
        $set: { phone: phone, otpNum: otpNum },
      },
      { upsert: true }
    );

    if (db) {
    }

    clientDb.close();

    const successdb = res.status(200).json({
      success: true,
    });
  }
};

export default handlerOtp;
