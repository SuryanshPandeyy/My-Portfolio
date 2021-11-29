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

    const user = await collection.findOne({ email });
    const hireNo = user ? user.hasOwnProperty("hires").length <= 1 : null;

    if (hireNo === null) {
      if (!user) {
        await collection.insertOne({
          email,
          name,
          phone,
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

        if (select === "Hire") {
          await collection.update(
            { email },
            {
              $push: {
                hires: {
                  id: 0,
                  "Hired Date": new Date(),
                },
              },
            }
          );
        }
        if (select === "Query") {
          await collection.update(
            { email: email },
            {
              $push: { message: message },
            }
          );
        }

        res.status(200).json({
          success: true,
        });
      } else {
        if (select === "Query") {
          await collection.update(
            { email: email },
            {
              $push: { message: message },
            }
          );

          res.status(200).json({
            success: true,
          });
        } else if (select === "Hire") {
          const countLength = user.hasOwnProperty("hires")
            ? user.hires[user.hires.length - 1] + 1
            : { id: 0 };

          await collection.update(
            { email },
            {
              $push: {
                hires: {
                  id: countLength.id,
                  "Hired Date": new Date(),
                },
              },
            }
          );
          res.status(200).json({
            success: true,
          });
        }
      }
    } else {
      if (select === "Query") {
        await collection.update(
          { email: email },
          {
            $push: { message: message },
          }
        );

        res.status(200).json({
          success: true,
        });
      }
      res
        .status(409)
        .send({ error: "Email already Exist! Please SignIn to hire again!" });
    }
    client.close();
  }
}

export default handler;
