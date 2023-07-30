import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./AllMovie.module.scss";
import { getMovies } from "../../services/MovieService";
import MovieCard from "../../components/movieCard/MovieCard";
import Button from "../../components/button/Button";
import { ALL_MOVIES } from "../../constants/AllMovie";
import {AiFillLike} from "react-icons/ai"
const AllMovie = (props) => {
  const [movies, setMovies] = useState([]);
  const [movieDescription, setMovieDescription] = useState({});

  useEffect(() => {
    const fetchData = () => {
      getMovies()
        .then((data) => {
          setMovies(data)
        setMovieDescription(data[0])}
        )
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);
  const onMoviePosterClickHandler = (data) => {
    setMovieDescription(data);
    console.log(movieDescription);
  };
  const onIncreaseLikeHandler = () => {};
  const movie =
    movies &&
    movies?.map((item) => (
      <MovieCard
        data={item}
        onClick={onMoviePosterClickHandler}
        onLikeIncrease={onIncreaseLikeHandler}
      />
    ));
  return (

      <div className={styles["all-movie"]}>
      <div className={styles["movies"]}>
        <h1>{ALL_MOVIES.title}</h1>
        <div className={styles["movie-container"]}>{movie}</div>
        <Button value={ALL_MOVIES.button} styleName="loadMore-button" />
      </div>
      <div className={styles["movie-description"]}>
        <div className={styles["movie-name"]}>
          <h1>{movieDescription?.movie}</h1>
          <div className={styles["like"]}>
          <AiFillLike />
          </div>
          </div>
        <h4>{movieDescription?.likes} Likes</h4>
        <img src={ movieDescription?.link} />
        <p className={styles["movie-about"]}>{movieDescription?.description}</p>

        <h2 >ACTORS</h2>
        {movieDescription?.actors?.map(item => <p>{item}</p>)}
      </div>
</div>
  );
};

AllMovie.propTypes = {};

export default AllMovie;
