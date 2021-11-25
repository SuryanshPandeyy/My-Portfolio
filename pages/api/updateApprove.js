import { MongoClient } from "mongodb";

const handlerOtp = async (req, res) => {
  if (req.method === "POST") {
    const { email, approve } = req.body;

    let clientDb;
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.l7odd.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    clientDb = await MongoClient.connect(connectionString);
    const db = clientDb.db();

    // delete req.body._id;
    await db.collection("users").updateMany(
      { email: email, select: "Hire" },
      {
        $set: { approve: approve },
      },
      { upsert: true }
    );

    clientDb.close();

    const successdb = res.status(200).json({
      success: true,
    });
  }
};

export default handlerOtp;
