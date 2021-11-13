import { MongoClient } from "mongodb";
const nodemailer = require("nodemailer");

const handlerOtp = async (req, res) => {
  if (req.method === "POST") {
    const { email, otpNum } = req.body;
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

    if (db) {

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        service: "gmail",
        auth: {
          user: process.env.NODEMAILER_EMAIL,
          pass: process.env.NODEMAILER_PASSWORD,
        },
      });

      const mailOption = {
        from: `suryanshpallavi@gmail.com`,
        to: `${email}`,
        subject: `Otp`,
        html: `Your Otp is : ${otpNum}`,
      };

      transporter.sendMail(mailOption, (err, data) => {
        if (err) {
          console.log(err);
          res.send("error" + JSON.stringify(err));
        } else {
          console.log(data);
        }
      });
    }

    client.close();

    const successdb = res.status(200).json({
      success: true,
    });
  }
};

export default handlerOtp;
