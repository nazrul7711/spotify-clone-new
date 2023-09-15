import React from 'react'
import styles from "@/styles/searchinput.module.scss"
const SearchInput = () => {
  return (
    <div className={styles.wrapper}>
      <input type='search' placeholder='What do you want to listen to ?'/>
    </div>
  )
}

export default SearchInput