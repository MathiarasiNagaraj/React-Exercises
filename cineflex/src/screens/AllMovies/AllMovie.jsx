import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./AllMovie.module.scss";
import { getMovies } from "../../services/MovieService";
import MovieCard from "../../components/movieCard/MovieCard";
import Button from "../../components/button/Button";
import { ALL_MOVIES } from "../../constants/AllMovie";
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
        <h1>{movieDescription?.movie}</h1>
        <h4>{movieDescription?.likes} Likes</h4>
        <img src={ movieDescription?.link} />
        <p>{movieDescription?.description}</p>

        <h1>Actors</h1>
        {movieDescription?.actors?.map(item => <p>{item}</p>)}
      </div>
</div>
  );
};

AllMovie.propTypes = {};

export default AllMovie;
