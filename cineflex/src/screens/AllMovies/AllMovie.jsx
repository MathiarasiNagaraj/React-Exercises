import React, { useEffect, useState } from "react";
import styles from "./AllMovie.module.scss";
import { getMovies } from "../../services/MovieService";
import MovieCard from "../../components/movieCard/MovieCard";
import Button from "../../components/button/Button";
import { Bars } from "react-loader-spinner";
import MovieDescription from "../../components/movieDescription/MovieDescription";
import { ALL_MOVIES } from "../../constants/AllMovie";

/**
 * A component that displays a list of all available movies and movie Description.
 * @returns {JSX.Element} AllMovie component.
 */

const AllMovie = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [index, setIndex] = useState(6);
  const [showMore, setShowMore] = useState(true);
  const [loading, setLoading] = useState(true);
  //fetching data when the page loaded
  useEffect(() => {
    const fetchData = () => {
      getMovies()
        .then((data) => {
          //changing the data type of likes in data
          const newData = data.map((data) => {
            return { ...data, likes: parseInt(data.likes, 10) };
          });
          
          setLoading(false);
          setMovies(newData);

          //setting the first movie in array for moviedescription
          if (data.length > 0) {
            setSelectedMovie(newData[0]);
          }
        })
        .catch((err) => console.log(err));
    };

    fetchData();
  }, []);

  //onclicking the movie card the data should change
  const onMoviePosterClickHandler = (id) => {
    const movieData = movies?.find((item) => item?.id === id);
    setSelectedMovie(movieData);
  };

  //updating movie description when whole movies is updated
  useEffect(() => {
   selectedMovie&& onMoviePosterClickHandler(selectedMovie.id);
  }, [movies]);

  //like increase handler ,update whole list with given like for given  movie like
  const onIncreaseLikeHandler = (data) => {
    const updatedMovies = movies.map((movie) => {
      if (movie.id === data.id) {
        return { ...movie, likes: data.like };
      }
      return movie;
    });
    setMovies(updatedMovies);
  };

  //to update movie whenever the movie data is updating
  let allMovies = movies.slice(0, index).map((item) => (
    <MovieCard
      key={item.id} 
      data={item}
      onClick={onMoviePosterClickHandler}
      onLikeIncrease={onIncreaseLikeHandler}
    />
  ));

  //loadmore functionality add movies by 6
  const onLoadMoreHandler = () => {
    if (index + 6 < movies.length) setIndex((prevIndex) => prevIndex + 6);
    else {
      setIndex(movies.length);
      setShowMore(false);
    }
  };
  return (
    <>
      {loading ? (
        <div className={styles["loader"]}>
          <Bars

            color="#f5a522"
            ariaLabel="bars-loading"
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
