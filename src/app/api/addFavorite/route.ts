import authOptions from "@/utils/auth";
import prismadb from "@/utils/prismaClient";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
export async function POST(req:Request) {
  let {} = await req.json()
  let session = await getServerSession(authOptions);
  if (!session) {
    throw new Error("user not logged in");
  }
  let updatedUser = prismadb.user.update({
    where: {
      email: session.user?.email!,
    },
    data: {
      songIDs: {
        push: "sello",
      },
    },
  });
  return NextResponse.json("done");
}
