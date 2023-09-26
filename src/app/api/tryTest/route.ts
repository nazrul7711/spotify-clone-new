import authOptions from "@/utils/auth";
import prismadb from "@/utils/prismaClient";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
export async function GET() {
  let session = await getServerSession(authOptions);
  let { songIDs } = await prismadb.user.findUnique({
    where: {
      email: session?.user?.email!,
    },
  });
  return NextResponse.json(songIDs);
}
export async function PUT() {
  let session = await getServerSession(authOptions);
  let res = await prismadb.user.update({
    where: {
      email: session?.user?.email!,
    },
    data: {
      songIDs: {
        push: "650eb718d214907b8f2ea04e",
      },
    },
  });
  return NextResponse.json(res);
}
