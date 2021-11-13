import { MongoClient } from "mongodb";
const nodemailer = require("nodemailer");
const { smtpTransport } = require("nodemailer-smtp-transport");

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
      Object.defineProperty(global, "__stack", {
        get: function () {
          var orig = Error.prepareStackTrace;
          Error.prepareStackTrace = function (_, stack) {
            return stack;
          };
          var err = new Error();
          Error.captureStackTrace(err, arguments.callee);
          var stack = err.stack;
          Error.prepareStackTrace = orig;
          return stack;
        },
      });

      Object.defineProperty(global, "__line", {
        get: function () {
          return __stack[1].getLineNumber();
        },
      });

      const transporter = nodemailer.createTransport(
        smtpTransport({
          host: "smtp.gmail.com",
          debug: true,
          port: 465,
          secure: true,
          service: "gmail",
          auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PASSWORD,
          },
        })
      );

      const mailOption = {
        from: `suryanshpallavi@gmail.com`,
        to: `${email}`,
        subject: `Otp`,
        text: "",
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
