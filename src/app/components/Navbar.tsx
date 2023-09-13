"use client";
import React, { useState } from "react";
import styles from "@/styles/navbar.module.scss";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Link from "next/link";
import { BsPersonCircle } from "react-icons/bs";

const Navbar = () => {
  let sth = true;
  let login = true;
  const [toggle,setToggle] = useState<boolean>(false)
  return (
    <div className={`${styles.wrapper} ${login ? styles.span : ""}`}>
      <div className={styles.arrows}>
        <div>
          <AiOutlineLeft size={20} />
        </div>
        <div>
          <AiOutlineRight size={20} />
        </div>
      </div>
      <div className={styles.buttons}>
        {login ? (
          <div className={styles.loginButtons}>
            <Link href="#">Explore Premium</Link>

            <div className={styles.IconButton} onClick={()=>setToggle(p=>!p)}>
              <BsPersonCircle size={30} />
            </div>
            {toggle && <div className={styles.options}>
              <div>Account</div>
              <div>Profile</div>
              <div>Upgrade to Premium</div>
              <div>Settings</div>
              <button >Logout</button>
            </div>}
          </div>
        ) : sth ? (
          <div>
            {" "}
            <Link href="/auth/signUp">Sign Up</Link>{" "}
            <Link href="/auth/signIn">Sign In</Link>
          </div>
        ) : (
          <button>LogOut</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
