"use client";
import React from "react";
import styles from "@/styles/topsidebar.module.scss";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { usePathname } from "next/navigation";
import Link from "next/link";

const TopSidebar = () => {
  let currentPath = usePathname();

  return (
    <div className={styles.wrapper}>
      <Link
        href="/"
        className={`${styles.item} ${
          currentPath === "/" ? styles.current : ""
        }`}
      >
        <div>
          <AiFillHome size={20} />
        </div>
        <div className={styles.text}>Home</div>
      </Link>
      <Link
        href="/search"
        className={`${styles.item} ${
          currentPath === "/search" ? styles.current : ""
        }`}
      >
        <div>
          <AiOutlineSearch size={20} />
        </div>
        <div className={styles.text}>Search</div>
      </Link>
    </div>
  );
};

export default TopSidebar;
