"use client";
import React, { useState } from "react";
import styles from "@/styles/navbar.module.scss";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Link from "next/link";
import { BsPersonCircle } from "react-icons/bs";
import { usePathname } from "next/navigation";
import SearchInput from "./SearchInput";
import { signOut, useSession } from "next-auth/react";

type NavbarProps = {
  className: string;
};

const Navbar = ({ className }: NavbarProps) => {
  let { data: user, status } = useSession();

  let isAuthenticated = status==="authenticated"
  const [toggle, setToggle] = useState<boolean>(false);
  let path = usePathname();

  return (
    <div
      className={`${styles.wrapper} ${className} ${ isAuthenticated? styles.span : ""}`}
    >
      <div className={styles.arrows}>
        <div>
          <AiOutlineLeft size={20} />
        </div>
        <div>
          <AiOutlineRight size={20} />
        </div>
        {path === "/search" && <SearchInput />}
      </div>
      <div className={styles.buttons}>
        {isAuthenticated ? (
          <div className={styles.loginButtons}>
            <Link href="#">Explore Premium</Link>

            <div
              className={styles.IconButton}
              onClick={() => setToggle((p) => !p)}
            >
              <BsPersonCircle size={30} />
            </div>
            {toggle && (
              <div className={styles.options}>
                <div>Account</div>
                <div>Profile</div>
                <div>Upgrade to Premium</div>
                <div>Settings</div>
                <button onClick={()=>signOut()}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <div>
            {" "}
            <Link href="/auth/signUp">Sign Up</Link>{" "}
            <Link href="/auth/signIn">Sign In</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
