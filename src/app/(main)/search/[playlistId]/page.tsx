"use client";
import React from "react";
import styles from "@/styles/playlst.module.scss";
import SongCard from "@/app/components/SongCard";
import { playlist } from "@/defineType";




const Playlist = ({
  params
}: {
  params: { playlistId: string };
}) => {
  let list = playlist.filter(play=>play.title===params.playlistId)
  return (  
    <div className={styles.wrapper}>

      <ul className={styles.playlist}>
        {list[0]?.sublist?.map((song) => (
          <li key={song.id}>
            <h1>{song.title}</h1>
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
    </div>
  );
};

export default Playlist;
