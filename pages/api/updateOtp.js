import { MongoClient } from "mongodb";
const nodemailer = require("nodemailer");

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, otpNum } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "suryanshpallavi@gmail.com",
        pass: "lufoqoajjyttdggp",
      },
    });

    const mailOption = {
      from: `Hiresupa`,
      to: `${email}`,
      subject: `Otp`,
      html: `Your Otp is : ${otpNum}`,
    };

    transporter.sendMail(mailOption, (err, data) => {
      if (err) {
        console.log(err);
        res.send("error" + JSON.stringify(err));
      }
    });

    let client;
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.l7odd.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    client = await MongoClient.connect(connectionString);
    const db = client.db();

    await db.collection("otp").updateOne(
      { email: email },
      {
        $set: { email: email, otpNum: otpNum },
      },
      { upsert: true }
    );

    client.close();

    const successdb = res.status(200).json({
      success: true,
    });
    console.log(successdb);
  }
};

export default handler;
