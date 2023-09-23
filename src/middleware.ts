import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// import multer from "multer"

// const upload= multer()

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
  // let data =await req.formData()
  // console.log("killy",data)
  // upload.single("file")

  return NextResponse.next();
}


export const config = {
  matcher: "/api/addSong",
};
