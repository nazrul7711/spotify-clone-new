import { createContext } from "react";

type SpotifyContextProps = {
  showModal: boolean;
  onModal: () => void;
  offModal: () => void;
};

export const SpotifyContext = createContext<SpotifyContextProps | null>(null);
