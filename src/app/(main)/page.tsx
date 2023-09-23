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
import aws from "aws-sdk";
import { useSession } from "next-auth/react";
import useGetSongs from "@/hooks/useGetSongs";
import { SongType } from "@/defineType";

const Main = () => {
  let { data: session, status } = useSession();
  let user = session?.user;
  const { data: songs, error, isLoading, mutate } = useGetSongs();

  console.log(songs);

  // let playlists = [
  //   { id: "1", src: "/samad.jpg", title: "Samad", description: "From Samad" },
  //   {
  //     id: "2",
  //     src: "/rappers.jpg",
  //     title: "Rappers",
  //     description: "A rappers song",
  //   },
  //   {
  //     id: "3",
  //     src: "/church.jpg",
  //     title: "Church",
  //     description: "From church",
  //   },
  // ];

  let { register, formState: errors, handleSubmit } = useForm();

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
    let res = await axios.put("/api/mongo");
    console.log(res);
  }
  return (
    <div className={styles.wrapper}>
      {user && <h1>Good Morning</h1>}
      {user && <h3>Made for {user.name}</h3>}
      <ul className={styles.playlist}>
        {songs?.map((song:SongType) => (
          <li key={song.id}>
            <SongCard
              songImage={song.songImage}
              title={song.title}
              description={song.description}
              id={song.id}
              song={song.song}
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

      <button onClick={deleteHandler} style={{ padding: "1rem" }}>
        Delete
      </button>
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

NextRequest cookies.get kind of methods,nextUrl



*/
