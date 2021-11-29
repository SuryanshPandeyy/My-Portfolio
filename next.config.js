const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      pageExtensions: ["mdx", "jsx", "js", "ts", "tsx"],
  
      reactStrictMode: true,
      trailingSlash: true,

      env: {
        mongodb_username: "suryanshpallavi",
        mongodb_password: "tuly%40th%40llo297",
        mongodb_cluster: "cluster0",
        mongodb_database: "hiresupa-dev",
        NODEMAILER_EMAIL: "suryanshpallavi@gmail.com",
        NODEMAILER_PASSWORD: "vpgmubsbtqlilncz",
        SENDGRID_API_KEY:
          "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",
        TWILIO_ACCOUNT_SID: "ACc79317f7773035fffe1f2e9fdb0c780d",
        TWILIO_AUTH_TOKEN: "17e7ecc2294ca719aae608517d8f8120",
        GOOGLE_ID: "988864140252-6s32v333h05980t6nhdp17qs7fl6cg3k.apps.googleusercontent.com",
        GOOGLE_SECRET: "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"
      },
    };
  }
  return {
    pageExtensions: ["mdx", "jsx", "js", "ts", "tsx"],
  
    reactStrictMode: true,
    trailingSlash: true,

    env: {
      mongodb_username: "suryanshpallavi",
      mongodb_password: "tuly%40th%40llo297",
      mongodb_cluster: "cluster0",
      mongodb_database: "hiresupa",
      NODEMAILER_EMAIL: "suryanshpallavi@gmail.com",
      NODEMAILER_PASSWORD: "vpgmubsbtqlilncz",
      SENDGRID_API_KEY:
        "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",
      TWILIO_ACCOUNT_SID: "ACc79317f7773035fffe1f2e9fdb0c780d",
      TWILIO_AUTH_TOKEN: "17e7ecc2294ca719aae608517d8f8120",
      GOOGLE_ID: "988864140252-6s32v333h05980t6nhdp17qs7fl6cg3k.apps.googleusercontent.com",
      GOOGLE_SECRET: "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"
    },
  };
};
