
import authOptions from "@/utils/auth"
import prismadb from "@/utils/prismaClient"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"
export async function GET(req:Request){
  let {searchParams} = new URL(req.url)
  let songId = searchParams.get("songId")
  let session = await getServerSession(authOptions)
  if(!session){
    return NextResponse.json({message:"user is not logged in"},{status:401})
  }
  let song = await prismadb.user.findMany({
    where: {
      songIDs: {
        has: songId,
      },
    },
  });
  if(song){
    return NextResponse.json(song);
  }
  return NextResponse.json(song)
}