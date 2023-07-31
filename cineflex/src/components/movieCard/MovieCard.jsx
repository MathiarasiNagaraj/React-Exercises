import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./MovieCard.module.scss";
import { AiFillLike } from "react-icons/ai";
const MovieCard = (props) => {
  const { data, onClick,onLikeIncrease } = props;
  const { link, movie, likes } = data;
    const [like, setLikes] = useState(parseInt(likes, 10));
    const onLikeIncreaseHandler = () => {
        setLikes((prevLike) => (
            prevLike + 1
        ))
        onLikeIncrease(like);
    }
    return (
      
    <div className={styles["movie-card"]}>
      <img src={link} onClick={() => onClick(data)} />
      <div className={styles["movie-details"]}>
        <div>
          <h2>{movie}</h2>
          <p>{like} Likes</p>
        </div>
        <div
          className={styles["icon"]}
          onClick={onLikeIncreaseHandler}
        >
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
