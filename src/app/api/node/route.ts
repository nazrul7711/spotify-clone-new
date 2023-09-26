import { NextResponse } from "next/server";
// import * as fs from "fs/promises"
import fs from "fs";
import path from "path";
import csv from "csvtojson"
import { Transform } from "stream";



export async function GET(req: Request) {
  try {
    let readStream = fs.createReadStream("csv",{highWaterMark:50})

    let ifAge = new Transform(
      {
        objectMode:true,
        transform(chunk,enc,callback){
          let user = {
            name:chunk.name,
            
          }
          return callback()
        }
      }
    )


    let writeStream = fs.createWriteStream("bill.txt")
    readStream
      .pipe(csv({ delimiter: "," }))
      .pipe(writeStream)
    readStream.on("end",()=>{
      writeStream.end()
    })

  } catch (error) {
    console.log(error);
  }
  return NextResponse.json("kill bill");
}

/*
how to get current working directory?
how to read a directory
create a directory 
suppose u dont have a path where u want a dir what to do
create and write to a file
read a file
append a file
how to check if a file is dfir or file

what is callback api of fs and why we have fs.promises based api

create a read stream and then read data from a file and upon completion console a msg

create a write stream and finish it when the file is read

do we have to end the write stream?

how to know size of a file?

why writeStream.write insode on."data" is not preferable and what is backpressure

how will u use pipe to write data into a new file?

suppose u want to console.log a message when the writestream is done

transform a csv data to object

with buffer data is send in small chunks and the client has to wait to process it before the whole data is arrived

but with streams we can wtart working as soon we get the first lot of data

spatial efficiancy a buffer cannot be greater than 1 gb and with buffer this is the problem few of these big buffer and our space is out

*/
