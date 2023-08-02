import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./MovieCard.module.scss";
import { AiFillLike } from "react-icons/ai";

const MovieCard = (props) => {

  const { data, onClick, onLikeIncrease } = props;
  const { link, movie, likes, id } = data;


  const onLikeIncreaseHandler = () => {
    const likedMovie = {
      id: id,
      like:likes+1,
    };
    onLikeIncrease(likedMovie);
  };




  return (
    <div className={styles["movie-card"]}>
      <img src={link} onClick={() => onClick(data)} />
      <div className={styles["movie-details"]}>
        <div>
          <h2>{movie}</h2>
          <p>{likes} Likes</p>
        </div>
        <div className={styles["icon"]} onClick={onLikeIncreaseHandler}>
          <AiFillLike />
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  data: PropTypes.shape({
    movie: PropTypes.string.isRequired,
    like: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MovieCard;
