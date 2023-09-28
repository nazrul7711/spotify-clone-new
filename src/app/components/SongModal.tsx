import React, { useContext } from "react";
import styles from "@/styles/songmodal.module.scss";
import { SpotifyContext } from "@/context/spotifyCtx";
import { AiFillCloseCircle } from "react-icons/ai";
import { useForm, SubmitHandler } from "react-hook-form";
import useGetSongs from "@/hooks/useGetSongs";
import axios from "axios";

type SongType = {
  song: string;
  songImage: string;
  title: string;
  description: string;
  singer: string;
};

const SongModal = () => {
  const { register, formState: errors, handleSubmit ,reset} = useForm<SongType>();
  const { mutate } = useGetSongs();
  let ctx = useContext(SpotifyContext);
  const submitHandler: SubmitHandler<SongType> = async (data) => {
    let formData1 = new FormData();
    try{
      formData1.append("songImage", data.songImage[0]);
      formData1.append("song", data.song[0]);
      formData1.append("singer", data.singer);
      formData1.append("description", data.description);
      formData1.append("title", data.title);
      let res = await axios.post("/api/addSong", formData1, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }
    catch(error){
      console.log(error)

    }
    reset()
    mutate();
  };
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.backdrop}
        onClick={() => ctx?.offSongModal()}
      ></div>
      <div className={styles.modal}>
        <div className={styles.close} onClick={() => ctx?.offSongModal()}>
          <AiFillCloseCircle size={30} />
        </div>
        <form
          className={styles.songform}
          onSubmit={handleSubmit(submitHandler)}
        >
          <div>
            <label htmlFor="song">Song</label>
            <input
              type="file"
              {...register("song", { required: "this field is mandatory" })}
            />
          </div>
          <div>
            <label htmlFor="songImage">Song Image</label>
            <input
              type="file"
              {...register("songImage", {
                required: "this field is mandatory",
              })}
            />
          </div>
          <div>
            <label htmlFor="title">Song Title</label>
            <input
              type="text"
              {...register("title", { required: "this field is mandatory" })}
            />
          </div>
          <div>
            <label htmlFor="description">Song Description</label>
            <input
              type="text"
              {...register("description", {
                required: "this field is mandatory",
              })}
            />
          </div>
          <div>
            <label htmlFor="singer">Singer</label>
            <input
              type="text"
              {...register("singer", { required: "this field is mandatory" })}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SongModal;
