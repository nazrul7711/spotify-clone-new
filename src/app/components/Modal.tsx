import React from 'react'
import styles from "@/styles/modal.module.scss"
import Link from 'next/link';

const Modal = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.backdrop}></div>
      <div className={styles.modal}>
        <div className={styles.item}></div>
        <div className={styles.item}>
          <div>Start listening with a free Spotify account</div>
          <Link href="/auth/signUp">Sign up free</Link>
          <button>Download app</button>
          <p>
            Already have an account? <Link href="/auth/signIn">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modal