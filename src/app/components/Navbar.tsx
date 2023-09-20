"use client";
import React, { useState } from "react";
import styles from "@/styles/navbar.module.scss";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Link from "next/link";
import { BsPersonCircle } from "react-icons/bs";
import { usePathname } from "next/navigation";
import SearchInput from "./SearchInput";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

type NavbarProps = {
  className: string;
};

const Navbar = ({ className }: NavbarProps) => {
  let { data, status } = useSession();
  let user = data?.user
  console.log(user)

  let isAuthenticated = status==="authenticated"
  const [toggle, setToggle] = useState<boolean>(false);
  let path = usePathname();

  return (
    <div
      className={`${styles.wrapper} ${className} ${
        isAuthenticated ? styles.span : ""
      }`}
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
              {/* {user?.image ? (
                <Image
                  src={user?.image}
                  width={30}
                  height={30}
                  alt="person-image"
                />
              ) :  */}
              {/* ( */}
                <BsPersonCircle size={30} />
              {/* )} */}
            </div>
            {toggle && (
              <div className={styles.options}>
                <div>Account</div>
                <div>Profile</div>
                <div>Upgrade to Premium</div>
                <div>Settings</div>
                <button onClick={() => signOut()}>Logout</button>
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
