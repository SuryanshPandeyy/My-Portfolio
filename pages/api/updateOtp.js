import { MongoClient } from "mongodb";

const sgMail = require("@sendgrid/mail");
const bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const handlerOtp = async (req, res) => {
  if (req.method === "POST") {
    const { email } = req.body;


    function generateOTP() {
      // Declare a digits variable
      // which stores all digits
      var digits = "0123456789";
      let OTP = "";
      for (let i = 0; i < 6; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
      }
      return OTP;
    }
    const otpNum = generateOTP();
    var hash = bcrypt.hashSync(otpNum, salt);

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

    const collection = db.collection("users");
    const user = await collection.findOne({ email: email });

    if (user) {
      await collection.updateOne(
        { email: email },
        {
          $set: { otpNum: hash },
        },
        { upsert: true }
      );

      if (db) {
        await sgMail
          .send(msg)
          .then(() => {
            console.log("Email sent");
          })
          .catch((error) => {
            console.error(error);
          });
      }
      res.status(200).json({
        success: true,
      });
    } else {
      res.status(409).send({ error: "Email not Exist" });
    }

    clientDb.close();
  }
};

export default handlerOtp;
