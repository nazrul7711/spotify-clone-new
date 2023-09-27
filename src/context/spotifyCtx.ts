import { SongType } from "@/defineType";
import { createContext } from "react";

type SpotifyContextProps = {
  showModal: boolean;
  showSongModal:Boolean;
  onModal: () => void;
  offModal: () => void;
  onSongModal: () => void;
  offSongModal: () => void;
  song:SongType|null;
  getSong:(songId:string)=>void;
  liked:boolean|null;
  like:()=>void;
  unlike:()=>void;
};


export const SpotifyContext = createContext<SpotifyContextProps | null>(null);
