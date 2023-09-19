import React, { useContext } from "react";
import styles from "@/styles/modal.module.scss";
import Link from "next/link";
import Image from "next/image";
import { SpotifyContext } from "@/context/spotifyCtx";
import { AiFillCloseCircle } from "react-icons/ai";

const Modal = () => {
  let ctx = useContext(SpotifyContext);
  return (
    <div className={styles.wrapper}>
      <div className={styles.backdrop} onClick={() => ctx?.offModal()}></div>
      <div className={styles.modal}>
        <div className={styles.close} onClick={() => ctx?.offModal()}>
          < AiFillCloseCircle size={30}/>
        </div>

        <div className={`${styles.item} ${styles.img}`}>
          <Image src={"/desert.jpg"} height={250} width={250} alt="spotofy" />
        </div>
        <div className={`${styles.item} ${styles.details}`}>
          <div className={styles.text}>
            Start listening with a free Spotify account
          </div>
          <Link href="/auth/signUp" className={styles.link}>
            Sign up free
          </Link>
          <button className={styles.button}>Download app</button>
          <p>
            Already have an account? <Link href="/auth/signIn">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
