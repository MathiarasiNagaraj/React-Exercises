import React, { useEffect, useState } from "react";
import styles from "./AllMovie.module.scss";
import { getMovies } from "../../services/MovieService";
import MovieCard from "../../components/movieCard/MovieCard";
import Button from "../../components/button/Button";
import { Bars } from "react-loader-spinner";
import MovieDescription from "../../components/movieDescription/MovieDescription";
import { ALL_MOVIES } from "../../constants/AllMovie";

const AllMovie = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [index, setIndex] = useState(6);
  const [showMore, setShowMore] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      getMovies()
        .then((data) => {
          const newData = data.map((data) => {
            return { ...data, likes: parseInt(data.likes, 10) };
          });
          setMovies(newData);
          if (data.length > 0) {
            setSelectedMovie(newData[0]);
          }
        })
        .catch((err) => console.log(err));
    };

    fetchData();
  }, []);

  const onMoviePosterClickHandler = (data) => {
    const movieData = movies.find((item) => item.id === data.id);
    setSelectedMovie(movieData);
  };

  useEffect(() => {
    onMoviePosterClickHandler(selectedMovie);
  }, [movies]);
  const onIncreaseLikeHandler = (data) => {
    const updatedMovieLikes = movies.map((movie) => {
      if (movie.id === data.id) {
        return { ...movie, likes: data.like };
      }
      return movie;
    });
    setMovies(updatedMovieLikes);
  };

  //to update movie whenever the movie data is updating

  let allMovies = movies.slice(0, index).map((item) => (
    <MovieCard
      key={item.id} // Don't forget to add a unique key
      data={item}
      onClick={onMoviePosterClickHandler}
      onLikeIncrease={onIncreaseLikeHandler}
    />
  ));

  const onLoadMoreHandler = () => {
    if (index + 6 < movies.length) setIndex((prevIndex) => prevIndex + 6);
    else {
      setIndex(movies.length);
      setShowMore(false);
    }
  };
  return (
    <>
      {movies.length < 0 ? (
        <div className={styles["loader"]}>
          <Bars
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />{" "}
        </div>
      ) : (
        <div className={styles["all-movie"]}>
          <div className={styles["movies"]}>
            <h1>{ALL_MOVIES.title}</h1>
            <div className={styles["movie-container"]}>{allMovies}</div>
            {showMore && (
              <Button
                value={ALL_MOVIES.button}
                styleName="loadMore-button"
                onClick={onLoadMoreHandler}
              />
            )}
          </div>
          <MovieDescription
            data={selectedMovie}
            onLikeIncrease={onIncreaseLikeHandler}
          />
        </div>
      )}
    </>
  );
};

export default AllMovie;
