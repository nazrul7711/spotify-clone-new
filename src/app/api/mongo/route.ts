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
  let res = await User.deleteMany({ lyrics:{$exists:true,$size:0} });
  return NextResponse.json(res);
}

export async function PUT(req: Request) {
  await mongoose.connect(
    "mongodb+srv://nazrul:CUwOi06Y6xL6MKtT@cluster0.wew6u.mongodb.net/udemy-mongo"
  );
  console.log("jaaneman");

  let res = await User.updateOne(
    { _id: "650d1dacf7e1a86f1e8b6029" },
    {
      $pop: { "lyrics":-1 },
    }
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
      name: "Maxy",
      email:"maxy@gmail.com",

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
      gender:"female",
    },

    {
      name: "Manuel",
      email:"manuel@gmail.com",
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
gender:"male",
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
