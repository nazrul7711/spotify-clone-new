import authOptions from "@/utils/auth";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import prismadb from "@/utils/prismaClient";

export async function GET(req: Request, { params }: { params: { songId: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json(
      { message: "user not logged in" },
      { status: 401 }
    );
  }
  let song = await prismadb.song.findUnique({
    where: { id: params.songId },
  });

  return NextResponse.json(song);
}
