import authOptions from "@/utils/auth";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import prismadb from "@/utils/prismaClient";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json(
      { message: "user not logged in" },
      { status: 401 }
    );
  }

  let user = await prismadb.user.findUnique({
    where: { email: session.user?.email! },
  });

  return NextResponse.json({ user: user });
}
