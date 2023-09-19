import { NextResponse } from "next/server";
import prismadb from "@/utils/prismaClient";
import { hash } from "bcrypt";

export async function POST(req: Request) {
  try {
    const { name, email, password, dob, gender } = await req.json();
    console.log(name,email,password,dob,gender)

    let existingUser = await prismadb.user.findUnique({
      where: {
        email,
      },
    });


    if (existingUser) {
      return NextResponse.json(
        { message: "user already exist" },
        { status: 409 }
      );
    }
    let hashedPassword = await hash(password, 12);

    const [year, month, day] = dob.split("-");
    const date = new Date(year, month, day);
    const isoString = date.toISOString();
    const prismadob = isoString.slice(0, -5) + "Z";

    let user = await prismadb.user.create({
      data: {
        name,
        email,
        hashedPassword,
        dob: prismadob,
        gender,
      },
    });
    return NextResponse.json({ message: user});
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
