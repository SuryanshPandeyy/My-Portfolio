import { MongoClient } from "mongodb";
import sgMail from "@sendgrid/mail";
import { google } from "googleapis";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// const nodemailer = require("nodemailer");

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, phone, message, select, title, price } = req.body;

    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: process.env.NODEMAILER_EMAIL,
    //     pass: process.env.NODEMAILER_PASSWORD,
    //   },
    // });

    // const mailOption = {
    //   from: `${email}`,
    //   to: `${process.env.NODEMAILER_EMAIL}`,
    //   subject: `New mail from ${email}`,
    //   html: `<div>${message}</div><div>${select}</div><div>${
    //     title !== false ? title : ""
    //   }</div><div>${price !== false ? price : ""}</div>`,
    // };

    // transporter.sendMail(mailOption, (err, data) => {
    //   if (err) {
    //     console.log(err);
    //     res.send("error" + JSON.stringify(err));
    //   } else {
    //     console.log("mail send");
    //   }
    // });

    const msg = {
      to: "suryanshpallavi@gmail.com", // Change to your recipient
      from: "details@hiresupa.com", // Change to your verified sender
      subject: "Hiresupa Form",
      text: `${message}`,
      html: `<div>${email},${message}</div><div>${select}</div><div>${
        title !== false ? title : ""
      }</div><div>${price !== false ? price : ""}</div>`,
    };

    let client;
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.l7odd.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    client = await MongoClient.connect(connectionString);
    const db = client.db();

    await db.collection("users").insertOne({
      email,
      name,
      phone,
      message,
      select,
      title,
      price,
    });

    if (db) {
     await sgMail
        .send(msg)
        .then(() => {
          console.log("Email Form sent");
        })
        .catch((error) => {
          console.error(error);
        });
    }
    client.close();

    const successdb = res.status(200).json({
      success: true,
    });
    console.log(successdb);
  }
}

export default handler;
