import { NextResponse } from "next/server"
import {S3Client,PutObjectCommand} from "@aws-sdk/client-s3"
import uniqid from "uniqid"
import fs from "fs"

export const config = { runtime: "experimental-edge" };

export async function POST(req:Request){
  // let data = await req.json()
  let data = await req.formData()


  console.log(data.get("song"))
  console.log(data.get("songImage"))

  let s3Client = new S3Client({
    region: process.env.AWS_LOCATION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY!,
      secretAccessKey: process.env.AWS_SECRET_KEY!,
    },
  });
  let uniq1 = uniqid()
  let uniq2 = uniqid()

  try{
    let imageParam={
      Bucket:process.env.AWS_BUCKET_NAME,
      Key:uniq1,
      Body:fs.createReadStream(data.get("songImage"))

    }

    let songParam={
      Bucket:process.env.AWS_BUCKET_NAME,
      Key:uniq2,
      Body:data.get("song")
    }
    let result1= new PutObjectCommand(imageParam)
    let result2= new PutObjectCommand(songParam)
  //   let [res1,res2] = await Promise.all([s3Client.send(result1),s3Client.send(result2)])
  //   console.log(res1,res2)

  // }
  // catch{

  // }

  return NextResponse.json("success")

}