"use client";
import React from "react";
import styles from "@/styles/search.module.scss";
import SearchCard from "@/app/components/SearchCard";
import { playlist } from "@/defineType";




 const Search = () => {
  return (
    <div className={styles.wrapper}>
      <ul>
        {playlist.map((playlist) => (
          <li key={playlist.title}>
            {
              <SearchCard
                text={playlist.title}
                color={playlist.color}
                image={playlist.image}
              />
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
