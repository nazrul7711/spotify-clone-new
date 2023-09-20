"use client";
import React, { ReactNode, useContext, useState } from "react";
import Navbar from "../components/Navbar";
import TopSidebar from "../components/TopSidebar";
import BottomSidebar from "../components/BottomSidebar";
import styles from "@/styles/layout.module.scss";
import Modal from "../components/Modal";
import AudioPlayer from "../components/AudioPlayer";
import { SpotifyContext } from "@/context/spotifyCtx";

const Layout = ({ children }: { children: ReactNode }) => {

  let ctx = useContext(SpotifyContext);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <TopSidebar />
        <BottomSidebar />
      </div>
      <Navbar className={styles.navbar} />

      {children}
      {/* <AudioPlayer/> */}
      {ctx?.showModal && <Modal />}
      {/* {someSong && (
        <AudioPlayer/>
      )} */}
    </div>
  );
};

export default Layout;
