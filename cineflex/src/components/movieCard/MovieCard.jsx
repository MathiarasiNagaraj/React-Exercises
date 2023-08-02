import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./MovieCard.module.scss";
import { AiFillLike } from "react-icons/ai";

/**
 * A component that displays movie information.
 * @param {Object} props - Component props.
 * @param {Object} props.data - Data containing movie information.
 * @param {string} props.data.link - The link to the movie.
 * @param {string} props.data.movie - The name of the movie.
 * @param {number} props.data.likes - The number of likes for the movie.
 * @param {string} props.data.id - The unique identifier of the movie.
 * @param {Function} props.onClick - The click event handler for the movie card.
 * @param {Function} props.onLikeIncrease - The event handler for increasing likes.
 * @returns {JSX.Element} MovieCard component.
 */

const MovieCard = (props) => {

  const { data, onClick, onLikeIncrease } = props;
  const { link, movie, likes, id } = data;


  //onlike increase handler will pass the like count and id
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
    id:PropTypes.string.isRequired,
    movie: PropTypes.string.isRequired,
    like: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  onLikeIncrease:PropTypes.func.isRequired
};

export default MovieCard;
