import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
// import Providers from "next-auth/providers";
import { MongoClient } from "mongodb";

export default NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  secret: "yBEbxG7/mEQ/MBr4zPmBF3F0krxtA6L86072HqYsFDg=",
  jwt: {
    maxAge: 60 * 60 * 24 * 30,
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
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
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
  },
});
