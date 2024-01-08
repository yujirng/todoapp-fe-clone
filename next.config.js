const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.join(__dirname, "./src/vendors/myicons/dist"),
            to: path.join(__dirname, "./public/fonts"),
            noErrorOnMissing: true,
          },
        ],
      })
    );

    return config;
  },
  output: "standalone",
};

module.exports = nextConfig;
