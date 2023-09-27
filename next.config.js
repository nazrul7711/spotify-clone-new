/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  images: {
    domains: ["nextjs-project-nazrul.s3.ap-south-1.amazonaws.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
