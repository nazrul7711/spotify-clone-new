"use client";
import React, { useContext } from "react";
import styles from "@/styles/bottomsidebar.module.scss";
import { BiLibrary } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineHeart, AiFillPushpin } from "react-icons/ai";
import { useSession } from "next-auth/react";
import { SpotifyContext } from "@/context/spotifyCtx";

const BottomSidebar = () => {
  let { status } = useSession();
  let isAthenticated = status === "authenticated";
  let ctx = useContext(SpotifyContext);

  let num = 2;

  function showModalHandler() {
    ctx?.onModal();
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.first}>
        <div className={styles.library}>
          <BiLibrary />
          <p>Your Library</p>
        </div>
        <div className={styles.plus} onClick={showModalHandler}>
          <AiOutlinePlus />
        </div>
      </div>
      {isAthenticated && (
        <div className={styles.likedSongs}>
          <div className={styles.heart}>
            <AiOutlineHeart />
          </div>
          <div className={styles.liked}>
            <div>Liked Songs</div>
            <div className={styles.song}>
              <div>
                <AiFillPushpin style={{ fill: "green" }} />
                <span>Playlist</span>
              </div>
              <div>.{num} songs</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BottomSidebar;
