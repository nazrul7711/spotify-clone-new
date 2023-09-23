import prismadb from "@/utils/prismaClient";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import authOptions from "@/utils/auth";
export async function GET() {
  let status = await getServerSession(authOptions);
  if (!status) {
    return NextResponse.json(
      { message: "user is not logged in" },
      { status: 401 }
    );
  }
  let songs = await prismadb.song.findMany();
  if (!songs) {
    return NextResponse.json(
      { message: "No songs in record" },
      { status: 404 }
    );
  }

  return NextResponse.json(songs);
}
