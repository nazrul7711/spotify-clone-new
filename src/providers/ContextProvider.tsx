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
  return (
    <SpotifyContext.Provider value={{ showModal, onModal, offModal }}>
      {children}
    </SpotifyContext.Provider>
  );
};

export default ContextProvider;
