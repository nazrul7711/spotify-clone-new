/** @type {import('next').NextConfig} */
const path = require("path");
const {PH, PHASE_DEVELOPMENT_SERVER} =require("next/constants")
const nextConfig = (phase)=>{
  if(phase===PHASE_DEVELOPMENT_SERVER){
    return {
      NEXT_PUBLIC_URL: "https://spotify-clone-new-steel.vercel.app/",
      images: {
        domains: ["nextjs-project-nazrul.s3.ap-south-1.amazonaws.com"],
      },
      sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
      },
    };
  }
  return {
    NEXT_PUBLIC_URL:"http://localhost:3000/",
    images: {
      domains: ["nextjs-project-nazrul.s3.ap-south-1.amazonaws.com"],
    },
    sassOptions: {
      includePaths: [path.join(__dirname, "styles")],
    },
  };

};

module.exports = nextConfig;
