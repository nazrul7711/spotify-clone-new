import mongoose from "mongoose";
import User from "@/model/Users";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(
    "mongodb+srv://nazrul:CUwOi06Y6xL6MKtT@cluster0.wew6u.mongodb.net/udemy-mongo"
  );
  console.log("connected  to db");

  let res = await User.find({hobbies:"dance"})
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
  console.log("connected  to db");
  // let data = await req.json();
  // console.log(data);
  let res = await User.updateMany(
    { },
    { $set: { hobbies:['kung fu','athletics'] } }
  );
  return NextResponse.json(res);
}

export async function POST(req: Request) {
  let newUser = await User.create({
    name: "Manoj",
    email: "manoj@gmail.com",
    song: "jane tu ya janne na",
    age: 23,
  });
  return NextResponse.json(newUser);
}
