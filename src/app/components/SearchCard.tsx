import React from "react";
import styles from "@/styles/searchcard.module.scss";
import Image from "next/image";
import Link from "next/link";


type SearchCardProps = {
  color: string;
  text: string;
  image: string;
};

const SearchCard = ({ color, text, image }: SearchCardProps) => {
  return (
    <Link href={`/search/${text}`}>
      <div className={styles.wrapper} style={{ backgroundColor: `${color}` }}>
        <div className={styles.text}>{text}</div>
        <Image
          src={image}
          height={120}
          width={120}
          alt="hiphop"
          className={styles.img}
        />
      </div>
    </Link>
  );
};

export default SearchCard;
