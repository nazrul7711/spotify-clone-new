import mongoose from "mongoose";
import User from "@/model/Users";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(
    "mongodb+srv://nazrul:CUwOi06Y6xL6MKtT@cluster0.wew6u.mongodb.net/udemy-mongo"
  );
  console.log("connected  to db");

  let res = await User.find({
    hobbies: { $elemMatch: { title: "Sports", frequency: 3 } },
  });
  return NextResponse.json(res);
}

export async function DELETE(req: Request) {
  let { searchParams } = new URL(req.url);
  // console.log(searchParams.get('email'))
  let email = searchParams.get("email");
  let res = await User.deleteOne({ email });
  return NextResponse.json(res);
}

export async function PUT(req: Request) {
  await mongoose.connect(
    "mongodb+srv://nazrul:CUwOi06Y6xL6MKtT@cluster0.wew6u.mongodb.net/udemy-mongo"
  );
  console.log("jaaneman");

  let res = await User.updateMany(
    { hobbies:{$elemMatch:{title:"Sports",frequency:3}}},
    {
      $set:{"hobbies.$.isSporty":true}
    },
    { upsert: true }
  );
  return NextResponse.json(res);
}

export async function POST(req: Request) {
  await mongoose.connect(
    "mongodb+srv://nazrul:CUwOi06Y6xL6MKtT@cluster0.wew6u.mongodb.net/udemy-mongo"
  );
  console.log("connected  to db");
  let users = await User.insertMany([
    {
      name: "Max",

      hobbies: [
        {
          title: "Sports",
          frequency: 3,
        },
        {
          title: "Cooking",
          frequency: 6,
        },
      ],
      phone: 131782734,
    },
    {
      name: "Manuel",
      hobbies: [
        {
          title: "Cooking",
          frequency: 5,
        },
        {
          title: "Cars",
          frequency: 2,
        },
      ],
      phone: "012177972",
      age: 30,
    },
    {
      name: "Anna",
      hobbies: [
        {
          title: "Sports",
          frequency: 2,
        },
        {
          title: "Yoga",
          frequency: 3,
        },
      ],
      phone: "80811987291",
      age: null,
    },
    {
      name: "Chris",
      hobbies: ["Sports", "Cooking", "Hiking"],
    },
  ]);
  return NextResponse.json(users);
}
