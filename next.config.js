const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      pageExtensions: ["mdx", "jsx", "js", "ts", "tsx"],
      images: {
        loader: "imgix",
      },
      reactStrictMode: true,
      trailingSlash: true,

      env: {
        mongodb_username: "suryanshpallavi",
        mongodb_password: "tuly%40th%40llo297",
        mongodb_cluster: "cluster0",
        mongodb_database: "hiresupa-dev",
      },
    };
  }
  return {
    pageExtensions: ["mdx", "jsx", "js", "ts", "tsx"],
    images: {
      loader: "imgix",
    },
    reactStrictMode: true,
    trailingSlash: true,

    env: {
      mongodb_username: "suryanshpallavi",
      mongodb_password: "tuly%40th%40llo297",
      mongodb_cluster: "cluster0",
      mongodb_database: "hiresupa",
    },
  };
};
