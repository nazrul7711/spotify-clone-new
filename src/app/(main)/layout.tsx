"use client"
import React, { ReactNode, useState } from "react";
import Navbar from "../components/Navbar";
import TopSidebar from "../components/TopSidebar";
import BottomSidebar from "../components/BottomSidebar";
import styles from "@/styles/layout.module.scss";
import Modal from "../components/Modal";
import AudioPlayer from "../components/AudioPlayer";


const Layout = ({ children }: { children: ReactNode }) => {
  let someSong = true;
  let isModal = true
  const [isPlaying,setIsPlaying] = useState<boolean>(false)
  return (
    <div className={styles.wrapper}>
      <TopSidebar />
      <Navbar />
      <BottomSidebar />
      {children}
      {/* <AudioPlayer/> */}
      {/* {isModal && <Modal/>} */}
      {/* {someSong && (
        <AudioPlayer/>
      )} */}
      
    </div>
  );
};

export default Layout;
