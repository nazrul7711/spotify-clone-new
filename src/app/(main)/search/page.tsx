"use client";
import React from "react";
import styles from "@/styles/search.module.scss";
import SearchCard from "@/app/components/SearchCard";

const Search = () => {
  const playlist = [
    { title: "Hip-Hop", color: "#D94B38", image: "/hiphop.jpg" },
    { title: "Latin", color: "#D338D9", image: "/hiphop.jpg" },
    { title: "Punk", color: "#1517A3", image: "/hiphop.jpg" },
    { title: "Party", color: "#B3C3C6", image: "/hiphop.jpg" },
    { title: "Latin", color: "#A17DE0", image: "/hiphop.jpg" },
    { title: "Ambient", color: "#2A7497", image: "/hiphop.jpg" },
  ];

  return (
    <div className={styles.wrapper}>
      <ul>
        {playlist.map((playlist) => (
          <li>
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
