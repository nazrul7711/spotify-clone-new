"use client";
import React, { ReactNode, useContext, useState } from "react";
import Navbar from "../components/Navbar";
import TopSidebar from "../components/TopSidebar";
import BottomSidebar from "../components/BottomSidebar";
import styles from "@/styles/layout.module.scss";
import Modal from "../components/Modal";
import AudioPlayer from "../components/AudioPlayer";
import { SpotifyContext } from "@/context/spotifyCtx";
import { useSession } from "next-auth/react";

const Layout = ({ children }: { children: ReactNode }) => {

  let ctx = useContext(SpotifyContext);
  let {status}  = useSession()
  let isAuthenticated = status==="authenticated"

  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <TopSidebar />
        <BottomSidebar />
      </div>
      <Navbar className={styles.navbar} />

      {children}
      {ctx?.showModal && <Modal />}
      {isAuthenticated && (
        <AudioPlayer/>
      )}
    </div>
  );
};

export default Layout;
