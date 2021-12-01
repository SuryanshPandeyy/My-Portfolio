import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Providers from "next-auth/providers";
import { MongoClient } from "mongodb";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Providers.Credentials({
      async authorize(credentials) {
        let client;
        const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.l7odd.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

        client = await MongoClient.connect(connectionString);
        const db = client.db();

        const collection = db.collection("users");
        const user = await collection.findOne({ email: credentials.email });
        if (!user) {
          client.close();
          throw new Error("Cannot find user");
        }
        client.close();
        return { email: user.email };
      },
    }),
  ],
  callbacks: {
    session: async (session, user) => {
      session.id = user.id;
      return Promise.resolve(session);
    },
  },
});
