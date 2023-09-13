"use client"
import React, { ReactNode, useState } from "react";
import Navbar from "../components/Navbar";
import TopSidebar from "../components/TopSidebar";
import BottomSidebar from "../components/BottomSidebar";
import styles from "@/styles/layout.module.scss";
import Image from "next/image";
import {
  AiOutlineHeart,
  AiFillPlayCircle,
  AiFillPauseCircle,
} from "react-icons/ai";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { HiSpeakerWave } from "react-icons/hi2";


const Layout = ({ children }: { children: ReactNode }) => {
  let someSong = true;
  const [isPlaying,setIsPlaying] = useState<boolean>(false)
  return (
    <div className={styles.wrapper}>
      <TopSidebar />
      <Navbar />
      <BottomSidebar />
      {children}
      {someSong && (
        <div className={styles.song}>
          <div className={styles.image}>
            <Image src="/desert.jpg" height={70} width={70} alt="music" />
            <div>
              <div>Respiro</div>
              <div>Con Alma</div>
            </div>
            <div>
              <AiOutlineHeart
                size={40}
                style={{ color: "white", cursor: "pointer" }}
              />
            </div>
          </div>
          <div className={styles.player}>
            <div>
              <BiSkipPrevious
                size={50}
                style={{ color: "white", cursor: "pointer" }}
              />
            </div>
            <div onClick={()=>setIsPlaying(p=>!p)}>
              {isPlaying ? (
                <AiFillPlayCircle
                  size={50}
                  style={{ color: "white", cursor: "pointer" }}
                />
              ) : (
                <AiFillPauseCircle
                  size={50}
                  style={{ color: "white", cursor: "pointer" }}
                />
              )}
            </div>
            <div>
              <BiSkipNext
                size={50}
                style={{ color: "white", cursor: "pointer" }}
              />
            </div>
          </div>
          <div className={styles.speaker}>
            <div>
              <HiSpeakerWave
                size={20}
                style={{ color: "white", cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
