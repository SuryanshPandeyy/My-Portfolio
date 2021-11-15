import { MongoClient } from "mongodb";
const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");
// const puretext = require("puretext");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

const handlerOtp = async (req, res) => {
  if (req.method === "POST") {
    const { email, otpNum } = req.body;

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // await client.messages
    //   .create({
    //     body: `Otp: ${otpNum}`,
    //     from: "+15005550006",
    //     to: "+918303559608",
    //   })
    //   .then((message) => console.log(message.sid));

    const message = `
  Otp: ${otpNum}
`;

    const msg = {
      to: email, // Change to your recipient
      from: "otp@hiresupa.com", // Change to your verified sender
      subject: "Hiresupa: Otp",
      text: message,
      html: `Your Otp is : ${otpNum}`,
    };

    let clientDb;
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.l7odd.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    clientDb = await MongoClient.connect(connectionString);
    const db = clientDb.db();

    await db.collection("otp").updateOne(
      { email: email },
      {
        $set: { email: email, otpNum: otpNum },
      },
      { upsert: true }
    );

    if (db) {
      sgMail
        .send(msg)
        .then(() => {
          console.log("Email sent");
        })
        .catch((error) => {
          console.error(error);
        });

      // const transporter = nodemailer.createTransport({
      //   host: "smtp.gmail.com",
      //   debug: true,
      //   port: 465,
      //   secure: true,
      //   service: "gmail",
      //   auth: {
      //     user: process.env.NODEMAILER_EMAIL,
      //     pass: process.env.NODEMAILER_PASSWORD,
      //   },
      // });
      // const mailOption = {
      //   from: `suryanshpallavi@gmail.com`,
      //   to: `${email}`,
      //   subject: `Otp`,
      //   text: "",
      //   html: `Your Otp is : ${otpNum}`,
      // };
      // transporter.sendMail(mailOption, (err, data) => {
      //   if (err) {
      //     console.log(err);
      //     res.send("error" + JSON.stringify(err));
      //   } else {
      //     console.log(data);
      //   }
      // });
    }

    clientDb.close();

    const successdb = res.status(200).json({
      success: true,
    });
  }
};

export default handlerOtp;
