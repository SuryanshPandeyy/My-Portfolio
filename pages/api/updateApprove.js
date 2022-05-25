import { MongoClient } from "mongodb";

const handlerOtp = async (req, res) => {
  if (req.method === "POST") {
    const { email, approve } = req.body;

    let clientDb;
     const connectionString = process.env.MONGODB_URI;

     client = await MongoClient.connect(connectionString);
     const db = client.db(process.env.mongodb_database);

    // delete req.body._id;
    await db.collection("users").updateMany(
      { email: email },
      {
        $set: { approve: approve },
      },
      { upsert: true }
    );

    clientDb.close();

    res.status(200).json({
      success: true,
    });
  }
};

export default handlerOtp;
