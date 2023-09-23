import { NextRequest, NextResponse } from "next/server";
import uniqid from "uniqid";
import { PageConfig } from "next";
import { S3 } from "aws-sdk";

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

const s3Client = new S3({
  region: process.env.AWS_LOCATION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_KEY!,
  },
});

export async function POST(req: NextRequest) {
  const dt = await req.formData();
  const file1: File | null = dt.get("songImage") as unknown as File;
  const file2: File | null = dt.get("song") as unknown as File;
  if (!file1 || !file2) {
    return NextResponse.json({ success: false });
  }
  const imageBytes = await file1.arrayBuffer();
  const imageBuffer = Buffer.from(imageBytes);
  const songBytes = await file2.arrayBuffer();
  const songBuffer = Buffer.from(songBytes);

  const imageUniqId = uniqid();
  const songUniqId = uniqid();

  const imageParam = {
    Bucket: "nextjs-project-nazrul",
    Key: imageUniqId,
    Body: imageBuffer,
    ContentType: "image/jpeg",
    ContentDisposition: "inline",
  };
  const imageData = await s3Client.upload(imageParam).promise();
  const songParam = {
    Bucket: "nextjs-project-nazrul",
    Key: songUniqId,
    Body: songBuffer,
    ContentType: "audio/mpeg",
    ContentDisposition: "inline",
  };
  const songData = await s3Client.upload(songParam).promise();

  console.log("File uploaded successfully");
  console.log("URL:", songData.Location);
  console.log("URL:", imageData.Location);

  
  id String @id @default(auto()) @map("_id") @db.ObjectId
  songImage String
  singer String
  title String
  description String
  userIDs String[] @db.ObjectId
  users  User[] 

  return NextResponse.json("success");
}
