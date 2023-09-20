"use client";
import React, { useRef } from "react";
import styles from "@/styles/mainpage.module.scss";
import PlaylistCard from "../components/SongCard";
import Link from "next/link";
import SongCard from "../components/SongCard";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import uniqid from "uniqid";

const Main = () => {
  let user = "Nazrul";
  let playlists = [
    { id: "1", src: "/samad.jpg", title: "Samad", description: "From Samad" },
    {
      id: "2",
      src: "/rappers.jpg",
      title: "Rappers",
      description: "A rappers song",
    },
    {
      id: "3",
      src: "/church.jpg",
      title: "Church",
      description: "From church",
    },
  ];

  let { register, formState: errors, handleSubmit } = useForm();

  const s3Client = new S3Client({
    region: process.env.AWS_LOCATION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY!,
      secretAccessKey: process.env.AWS_SECRET_KEY!,
    },
  });

  type inputType = {
    songImage: string;
    song: string;
  };
  const submitHandler: SubmitHandler<inputType> = async (data) => {
    let formData1 = new FormData();
    formData1.append("songImage", data.songImage[0]);
    formData1.append("song", data.song[0]);
    let res = await axios.post("/api/addSong", formData1, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res);
  };
  async function deleteHandler() {
    // let res = await axios.delete("/api/mongo?email=user2@example.com")
    // console.log(res)
    // let res = await axios.put("/api/mongo");
    // let res = await axios.post("/api/mongo")
    // console.log(res)
    let res = await axios.post("/api/addSong", {
      // songImage String
      // singer String
      // title String
      // description String
      // userIDs String[] @db.ObjectId
      // users  User[]
    });
  }
  return (
    <div className={styles.wrapper}>
      {user && <h1>Good Morning</h1>}
      {user && <h3>Made for {user}</h3>}
      <ul className={styles.playlist}>
        {playlists.map((song) => (
          <li key={song.id}>
            <SongCard
              src={song.src}
              title={song.title}
              description={song.description}
              id={song.id}
            />
          </li>
        ))}
      </ul>
      <div className={styles.addSong}>
        <form onSubmit={handleSubmit(submitHandler)}>
          <input type="file" {...register("songImage")} />
          <input type="file" {...register("song")} />
          <button type="submit">Add Song</button>
        </form>
      </div>

      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default Main;

/*
npx prisma generate will not add model to atlas 

let res = await axios.post("/api/register", {
         name: data?.name,
         email: data?.email,
         password: data?.password,
         dob: `${data?.year}-${data?.month}-${data?.day}`,
         gender: data?.gender,
       });
       console.log(res.status);
why console.log(res.status) does not run?

difference between console.log and console.error

how will u check if error is axioserror and output error message

learn next auth more

explain secret,session
secret is not mandatory in developement but in production it is mandatory if u provide nextauth_secret no need to use secret

session if u using adapter then strategy is database and to enforce jwt u have to explicitly define it , and it has expiration time of 30 days

getToken({req,nextauth_secret}) to get token

pages is object to specify custom routes like signIn:"auth/signIn"



*/
