import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import styles from "@/styles/audio.module.scss";
import Image from "next/image";

import {
  AiFillPauseCircle,
  AiFillPlayCircle,
  AiFillHeart,
} from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { HiSpeakerWave } from "react-icons/hi2";
import { SpotifyContext } from "@/context/spotifyCtx";
import useSwr from "swr";
import fetcher from "@/lib/fetcher";

const AudioPlayer = () => {
  let context = useContext(SpotifyContext);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLInputElement>(null);
  const soundRef = useRef<HTMLInputElement>(null);
  const animationRef = useRef(0);
  let song = context?.song;
  let songId = context?.song?.id!;

  let { data } = useSwr(
    songId ? `/api/songAvailable?songId=${songId}` : null,
    fetcher
  );

  let { mutate } = useSwr("/api/getUser", fetcher);

  useEffect(() => {
    if (data?.length === 0) {
      context?.unlike();
    } else {
      context?.like();
    }
  }, [data,context]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  }, [song]);

  async function addFavoriteHandler() {
    if (!context?.liked) {
      context?.like();
    } else {
      context?.unlike();
    }

    if (!context?.liked) {
      await axios.put("/api/addFavorite", {
        songId,
      });
      mutate();
    } else {
      await axios.put("/api/removeFavorite", {
        songId,
      });
      mutate();
    }
  }

  const volumeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (audioRef.current) {
      audioRef.current!.volume = parseFloat(e.target.value);
    }
    soundRef.current?.style.setProperty(
      "--sound-width",
      `${(parseFloat(soundRef.current?.value) / 1) * 100}%`
    );
  };

  function whilePlaying() {
    progressRef.current!.value = (audioRef.current?.currentTime)!.toString();
    progressRef.current?.style.setProperty(
      "--progress-width",
      `${(parseInt(progressRef.current?.value) / duration) * 100}%`
    );
    setCurrentTime(parseInt(progressRef.current?.value!));

    animationRef.current = requestAnimationFrame(whilePlaying);
  }
  function audioHandler() {
    let previous = isPlaying;
    setIsPlaying(!previous);
    if (!previous) {
      audioRef.current?.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioRef.current?.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }

  useEffect(() => {
    const seconds = Math.floor(audioRef.current?.duration!);
    setDuration(seconds);
    (progressRef.current as HTMLInputElement).max = seconds.toString();
    (soundRef?.current as HTMLInputElement).max = "1";
    console.log(audioRef.current?.volume);
  }, [audioRef?.current?.readyState]);

  function changeRange() {
    const audioCurrent = audioRef.current;
    const progressValue = progressRef.current?.value;

    if (audioCurrent && progressValue !== undefined) {
      audioCurrent.currentTime = parseInt(progressValue);
    }
    changePlayerCurrentTime();
  }

  const changePlayerCurrentTime = () => {
    progressRef.current?.style.setProperty(
      "--progress-width",
      `${(parseInt(progressRef.current?.value) / duration) * 100}%`
    );
    setCurrentTime(parseInt(progressRef.current?.value!));
  };

  const calculateTime = (sec: number) => {
    let minutes = Math.floor(sec / 60);
    let returnedMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
    let seconds = Math.floor(sec % 60);
    let returnedSec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMin}:${returnedSec}`;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.song}>
        <div className={styles.image}>
          {context?.song && (
            <Image src={song?.songImage!} height={70} width={70} alt="song" />
          )}
          <div>
            {context?.song && <div>{song?.title}</div>}
            {context?.song && <div>{song?.singer}</div>}
          </div>
          <div onClick={addFavoriteHandler}>
            {context?.song && (
              <AiFillHeart
                size={40}
                style={{
                  color: context?.liked ? "green" : "white",
                  cursor: "pointer",
                }}
              />
            )}
          </div>
        </div>
        <div className={styles.player}>
          <div className={styles.playOptions}>
            <div>
              <BiSkipPrevious
                size={50}
                style={{ color: "white", cursor: "pointer" }}
              />
            </div>
            <div onClick={audioHandler}>
              {isPlaying ? (
                <AiFillPauseCircle
                  size={50}
                  style={{ color: "white", cursor: "pointer" }}
                />
              ) : (
                <AiFillPlayCircle
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
            <audio src={song?.song} preload="metadata" ref={audioRef} />
          </div>
          <div className={styles.progress}>
            <div className={styles.timePiece}>{calculateTime(currentTime)}</div>
            <input
              type="range"
              ref={progressRef}
              className={styles.progressBar}
              onChange={changeRange}
              defaultValue="0"
            />
            <div className={styles.timePiece}>
              {duration && !isNaN(duration) && calculateTime(duration)}
            </div>
          </div>
        </div>
        <div className={styles.speaker}>
          <HiSpeakerWave
            size={20}
            style={{ color: "white", cursor: "pointer" }}
          />
          (
          <input
            type="range"
            step=".01"
            defaultValue="1"
            ref={soundRef}
            className={styles.soundBar}
            onChange={volumeHandler}
          />
          )

        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
