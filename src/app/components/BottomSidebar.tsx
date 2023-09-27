"use client";
import React, { useContext } from "react";
import styles from "@/styles/bottomsidebar.module.scss";
import { BiLibrary } from "react-icons/bi";
import useSwr from "swr"
import {
  AiOutlinePlus,
  AiOutlineHeart,
  AiFillPushpin,
  AiFillFileAdd,
} from "react-icons/ai";
import { useSession } from "next-auth/react";
import { SpotifyContext } from "@/context/spotifyCtx";
import fetcher from "@/lib/fetcher";



const BottomSidebar = () => {
  let { status } = useSession();
  let {data,error,isLoading,mutate}=useSwr("/api/getUser",fetcher)
  
  let isAthenticated = status === "authenticated";
  let ctx = useContext(SpotifyContext);


  let num =data?.user.songIDs.length

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
      <div className={styles.addSong}>
        <div className={styles.fileIcon} onClick={()=>ctx?.onSongModal()}><AiFillFileAdd/></div>
        <div>Add Song</div>
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
