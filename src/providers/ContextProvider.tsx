"use client";
import React, { ReactNode, useState } from "react";
import { SpotifyContext } from "@/context/spotifyCtx";

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  function onModal() {
    setShowModal(true);
  }
  function offModal() {
    setShowModal(false);
  }
  const [showSongModal, setShowSongModal] = useState<boolean>(false);
  function onSongModal() {
    setShowSongModal(true);
  }
  function offSongModal() {
    setShowSongModal(false);
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
      }}
    >
      {children}
    </SpotifyContext.Provider>
  );
};

export default ContextProvider;
