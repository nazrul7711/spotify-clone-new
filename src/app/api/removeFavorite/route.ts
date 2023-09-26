import authOptions from "@/utils/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prismadb from "@/utils/prismaClient"

export async function PUT(req: Request) {
  let { songId } = await req.json();
  let songID = songId
  let session = await getServerSession(authOptions);
  if (!session) {
    throw new Error("user not logged in");
  }
  const { songIDs } = await prismadb.user.findUnique({
    where: {
      email: session.user?.email!,
    },
  });
  let updatedUser =await prismadb.user.update({
    where: {
      email: session.user?.email!,
    },
    data: {
      songIDs: songIDs.filter((songId: string) => songID !== songId),
    },
  });
  return NextResponse.json(updatedUser);
}
