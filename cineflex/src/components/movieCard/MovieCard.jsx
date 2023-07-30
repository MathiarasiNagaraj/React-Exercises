import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './MovieCard.module.scss'
import {AiFillLike } from 'react-icons/ai'
const MovieCard = props => {
    const{data,onClick}=props
    const { link, movie ,likes} = data
    const [ like, setLikes ] = useState(parseInt(likes,10));
  return (
      <div className={styles["movie-card"]}>
          <img src={link} onClick={()=> onClick(data)} />
          <div className={styles["movie-details"]}>
          <div>
          <h2>{movie}</h2>
          <p>{like} Likes</p>
          </div>
 <div className={styles["icon"]} onClick={()=>setLikes((prevLike)=>prevLike+1)}>
              <AiFillLike /></div>
              </div>
    </div>
  )
}

MovieCard.propTypes = {}

export default MovieCard