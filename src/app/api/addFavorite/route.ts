import authOptions from "@/utils/auth";
import prismadb from "@/utils/prismaClient";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PUT(req:Request) {
  let {songId} = await req.json()
  let songID=songId
  let session = await getServerSession(authOptions);
  if (!session) {
    throw new Error("user not logged in");
  }
  let updatedUser =await prismadb.user.update({
    where: {
      email: session.user?.email!,
    },
    data: {
      songIDs: {
        push: songID,
      },
    },
  });
  return NextResponse.json(updatedUser);
}
