"use client";
import { SpotifyContext } from "@/context/spotifyCtx";
import { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import styles from "@/styles/player.module.scss";

const Player = ({ songId }: { songId: string }) => {
  let context = useContext(SpotifyContext);

  function songPlayerHandler(songId: string) {
    console.log("player clicked")
    context?.getSong(songId);
  }
  return (
    <div onClick={() => songPlayerHandler(songId)} className={styles.wrapper}>
      <AiFillPlayCircle size={60} style={{ color: "#48EA91" }} />
    </div>
  );
};

export default Player;
