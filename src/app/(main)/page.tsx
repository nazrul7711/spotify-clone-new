"use client";
import React from "react";
import styles from "@/styles/mainpage.module.scss";
import PlaylistCard from "../components/SongCard";
import Link from "next/link";
import SongCard from "../components/SongCard";
import axios from "axios";

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

  async function deleteHandler() {
    // let res = await axios.delete("/api/mongo?email=user2@example.com")
    // console.log(res)
    let res = await axios.put("/api/mongo");
    // let res = await axios.post("/api/mongo")
    // console.log(res)
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



*/
