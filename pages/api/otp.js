import { MongoClient } from "mongodb";
import sgMail from "@sendgrid/mail";
import { google } from "googleapis";
const nodemailer = require("nodemailer");

async function handler(req, res) {
  if (req.method === "POST") { 
    const { email, otpNum } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
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

    await db.collection("otp").insertOne({
      email,
      otpNum,
    });

    client.close();

    const successdb = res.status(200).json({
      success: true,
    });
    console.log(successdb);
  }
}

export default handler;
