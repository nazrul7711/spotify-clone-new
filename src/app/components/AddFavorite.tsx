"use client"
import React, { useState } from 'react'
import { AiFillHeart } from "react-icons/ai";
import styles from "@/styles/favorite.module.scss"
import axios from "axios"

const AddFavorite = (songId:{songId:string}) => {
  const [color,setColor]  = useState<boolean>(false)
  async function addFavoriteHandler(){
    let res = await axios.post("/api/addFavorite",{
      songId:songId
    })
    console.log(res)
  }
  return (
    <div className={styles.wrapper} onClick={addFavoriteHandler}>
      <AiFillHeart size={30} style={{color:"green"}}/>
    </div>
  );
}

export default AddFavorite