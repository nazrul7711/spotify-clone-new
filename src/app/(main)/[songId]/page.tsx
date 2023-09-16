import React from "react";
import styles from "@/styles/song.module.scss";
import Image from "next/image";
import { AiFillHeart, AiFillPlayCircle } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const Song = () => {
  let song = {
    src: "/church.jpg",
    description: "a church song",
    title: "Good For You",
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.song}>
        <div className={styles.imgContainer}>
          <Image src={song.src} fill={true} alt={song.title} />
        </div>
        <div className={styles.songDetail}>
          <div>Song</div>
          <div>{song.title}</div>
          <div>{song.description}</div>
        </div>
      </div>
      <div className={styles.songIcons}>
        <AiFillPlayCircle size={60} style={{ color: "#48EA91" }} />
        <AiFillHeart size={30} />
        <BiDotsHorizontalRounded size={30} />
      </div>
    </div>
  );
};

export default Song;
