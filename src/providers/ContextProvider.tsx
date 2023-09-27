"use client";
import React, { ReactNode, useState } from "react";
import { SpotifyContext } from "@/context/spotifyCtx";
import { SongType } from "@/defineType";
import axios from "axios";

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  function onModal() {
    setShowModal(true);
  }
  function offModal() {
    setShowModal(false);
  }
  const [showSongModal, setShowSongModal] = useState<boolean>(false);
  const [song, setSong] = useState<SongType | null>(null);
  const [liked, setLiked] = useState<boolean | null>(null);
  function onSongModal() {
    setShowSongModal(true);
  }
  function like() {
    
    setLiked(true);
  }
  function unlike() {    
    setLiked(false);
  }

  function offSongModal() {
    setShowSongModal(false);
  }
  async function getSong(songId: string) {
    let res = await axios.get(`/api/getSong/${songId}`);
    let song = res.data;
    setSong(song);
  }
  return (
    <SpotifyContext.Provider
      value={{
        showModal,
        onModal,
        offModal,
        showSongModal,
        onSongModal,
        offSongModal,
        getSong,
        song,
        liked,
        like,
        unlike,
      }}
    >
      {children}
    </SpotifyContext.Provider>
  );
};

export default ContextProvider;
