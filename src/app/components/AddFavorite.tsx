"use client";
import React, { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import styles from "@/styles/favorite.module.scss";
import axios from "axios";
import useAvailableSong from "@/hooks/useSongAvailable";

const AddFavorite = ({ songId }: { songId: string }) => {
  let { data, error, isLoading, mutate } = useAvailableSong(songId);
  const [color, setColor] = useState<boolean | null>(null);
  useEffect(() => {
    if (data?.length === 0) {
      setColor(false);
    } else {
      setColor(true);
    }
  }, [data]);

  async function addFavoriteHandler() {
    const previousColor = color;
    setColor(!previousColor);
    if (!previousColor) {
      let res = await axios.put("/api/addFavorite", {
        songId: songId,
      });
    } else {
      let res = await axios.put("/api/removeFavorite", {
        songId: songId,
      });
    }
  }
  return (
    <div className={styles.wrapper} onClick={addFavoriteHandler}>
      <AiFillHeart size={30} style={{ color: color ? "green" : "white" }} />
    </div>
  );
};

export default AddFavorite;
