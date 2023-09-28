"use client";
import React, { useEffect, useState, useContext } from "react";
import { AiFillHeart } from "react-icons/ai";
import styles from "@/styles/favorite.module.scss";
import axios from "axios";
import useAvailableSong from "@/hooks/useSongAvailable";
import fetcher from "@/lib/fetcher";
import useSwr from "swr";
import { SpotifyContext } from "@/context/spotifyCtx";

const AddFavorite = ({ songId }: { songId: string }) => {
  let { data } = useAvailableSong(songId);
  let { mutate } = useSwr("/api/getUser", fetcher);
  let context = useContext(SpotifyContext);
  useEffect(() => {
    if (data?.length === 0) {
      context?.unlike();
    } else {
      context?.like();
    }
  }, [data]);

  async function addFavoriteHandler() {
    if (!context?.liked) {
      context?.like();
    } else {
      context?.unlike();
    }

    if (!context?.liked) {
      await axios.put("/api/addFavorite", {
        songId: songId,
      });
      mutate();
    } else {
      await axios.put("/api/removeFavorite", {
        songId: songId,
      });
      mutate();
    }
  }
  return (
    <div className={styles.wrapper} onClick={addFavoriteHandler}>
      <AiFillHeart size={30} style={{ color: context?.liked ? "green" : "white" }} />
    </div>
  );
};

export default AddFavorite;
