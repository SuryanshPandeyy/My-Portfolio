import { MongoClient } from "mongodb";
import sgMail from "@sendgrid/mail";
import { google } from "googleapis";
const nodemailer = require("nodemailer");

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOption = {
      from: `${email}`,
      to: `${process.env.EMAIL}`,
      subject: `New mail from ${email}`,
      html: `<div>${message}</div>`
    };

    transporter.sendMail(mailOption, (err, data) => {
      if (err) {
        console.log(err);
        res.send("error" + JSON.stringify(err));
      } else {
        console.log("mail send");
      }
    });

    let client;
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.l7odd.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    client = await MongoClient.connect(connectionString);
    const db = client.db();

    await db.collection("users").insertOne({
      email,
      name,
      phone,
      message,
    });

    client.close();

    const successdb = res.status(200).json({
      success: true,
    });
    console.log(successdb);
  }
}

export default handler;
