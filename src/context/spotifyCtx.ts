import { createContext } from "react";

type SpotifyContextProps = {
  showModal: boolean;
  showSongModal:Boolean;
  onModal: () => void;
  offModal: () => void;
  onSongModal: () => void;
  offSongModal: () => void;
};

export const SpotifyContext = createContext<SpotifyContextProps | null>(null);
