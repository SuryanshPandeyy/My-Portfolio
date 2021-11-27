import { MongoClient } from "mongodb";
import sgMail from "@sendgrid/mail";
import { google } from "googleapis";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// const nodemailer = require("nodemailer");

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, phone, message, select, title, price, approve } =
      req.body;

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

    const collection = db.collection("users");

    const user = await collection.findOne({ email: email });

    if (!user) {
      await collection.insertOne({
        email,
        name,
        phone,
        message,
        select,
        title,
        price,
        approve,
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
      res.status(200).json({
        success: true,
      });
    } else {
      res.status(409).send({ error: "Email already Exist" });
    }

    client.close();
  }
}

export default handler;
