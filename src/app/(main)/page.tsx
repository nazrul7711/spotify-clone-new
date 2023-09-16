import React from "react";
import styles from "@/styles/mainpage.module.scss";
import PlaylistCard from "../components/SongCard";
import Link from "next/link";
import SongCard from "../components/SongCard";

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
    { id: "3", src: "/church.jpg", title: "Church", description: "From church" },
  ];
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
    </div>
    
  );
};

export default Main;
