"use client";
import React, { useState } from "react";
import styles from "@/styles/playlist.module.scss";
import Image from "next/image";
import { AiFillPlayCircle } from "react-icons/ai";
import Link from "next/link";

export interface SongCardProps {
  songImage: string;
  title: string;
  description: string;
  id: string;
  song: string;
}
const SongCard = ({
  id,
  songImage,
  title,
  description,
  song,
}: SongCardProps) => {
  const [onHover, setOnHover] = useState<boolean>(false);



  return (
    <div className={styles.wrapper}>
      {id && (
        <Link href={`/${id}`} replace>
          <div
            className={styles.container}
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
          >
            <div className={styles.imgContainer}>
              <Image src={songImage} fill={true} alt="playlist" />
            </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.desc}>{description}</div>
            {onHover && (
              <div className={styles.play}>
                <AiFillPlayCircle size={45} style={{ color: "#48EA91" }} />
              </div>
            )}
          </div>
        </Link>
      )}
    </div>
  );
};

export default SongCard;
