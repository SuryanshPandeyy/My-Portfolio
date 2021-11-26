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
    },
  };
};
