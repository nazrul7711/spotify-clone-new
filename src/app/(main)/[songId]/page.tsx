import React from "react";
import styles from "@/styles/song.module.scss";
import Image from "next/image";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import AddFavorite from "@/app/components/AddFavorite";
import { headers } from "next/headers";
import Player from "@/app/components/Player";

//spotify-clone-new-steel.vercel.app/api/getSong/650ec738d819c3b6ab0a059e

https: async function getSong(songId: string) {
  let res = await fetch(
    `spotify-clone-new-steel.vercel.app/api/getSong/${songId}`,
    {
      method: "GET",
      headers: headers(),
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
}

const Song = async ({ params }: { params: { songId: string } }) => {
  const { songId } = params;
  const song = await getSong(songId);

  return (
    <div className={styles.wrapper}>
      <div className={styles.song}>
        <div className={styles.imgContainer}>
          <Image src={song?.songImage} fill={true} alt={song.title} />
        </div>
        <div className={styles.songDetail}>
          <div>Song</div>
          <div>{song?.singer}</div>
          <div>{song?.title}</div>
          <div>{song?.description}</div>
        </div>
      </div>
      <div className={styles.songIcons}>
        <Player songId={songId} />
        <AddFavorite songId={songId} />
        <BiDotsHorizontalRounded size={30} />
      </div>
    </div>
  );
};

export default Song;
