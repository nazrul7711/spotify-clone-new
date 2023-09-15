import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/audio.module.scss";
import Image from "next/image";
import {
  AiFillPauseCircle,
  AiFillPlayCircle,
  AiOutlineHeart,
} from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { HiSpeakerWave } from "react-icons/hi2";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLInputElement>(null);
  const soundRef = useRef<HTMLInputElement>(null);
  const animationRef = useRef(0);

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
    progressRef.current!.value = audioRef.current?.currentTime!.toString();
    progressRef.current?.style.setProperty(
      "--progress-width",
      `${(parseInt(progressRef.current?.value) / duration) * 100}%`
    );
    setCurrentTime(parseInt(progressRef.current?.value!));
    // console.log(typeof audioRef.current?.currentTime,"audio");
    // console.log(parseFloat(progressRef.current?.max!),"progress");

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
    (soundRef.current as HTMLInputElement).max = "1";
    console.log(audioRef.current?.volume);
  }, [audioRef?.current?.readyState]);

  function changeRange() {
    const audioCurrent = audioRef.current;
    const progressValue = progressRef.current?.value;

    if (audioCurrent && progressValue !== undefined) {
      audioCurrent.currentTime = parseInt(progressValue);
    }
    changePlayerCurrentTime();

    // if (audioRef.current?.duration === progressRef.current?.max) {
    //   setIsPlaying(false);
    // }
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
          <Image src="/desert.jpg" height={70} width={70} alt="music" />
          <div>
            <div>Respiro</div>
            <div>Con Alma</div>
          </div>
          <div>
            <AiOutlineHeart
              size={40}
              style={{ color: "white", cursor: "pointer" }}
            />
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
            <audio src={"/randomsong.mp3"} preload="metadata" ref={audioRef} />
          </div>
          <div className={styles.progress}>
            <div style={{ color: "white" }}>{calculateTime(currentTime)}</div>
            <input
              type="range"
              ref={progressRef}
              className={styles.progressBar}
              onChange={changeRange}
              defaultValue="0"
            />
            <div style={{ color: "white" }}>
              {duration && !isNaN(duration) && calculateTime(duration)}
            </div>
          </div>
        </div>
        <div className={styles.speaker}>
          <HiSpeakerWave
            size={20}
            style={{ color: "white", cursor: "pointer" }}
          />
          <input
            type="range"
            step=".01"
            defaultValue="0"
            // value={volume}
            ref={soundRef}
            className={styles.soundBar}
            onChange={volumeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;

//play setPlay
//setDuration
//currentTime
