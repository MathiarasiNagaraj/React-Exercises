import React, { useEffect, useState, useMemo } from "react";
import styles from "./AllMovie.module.scss";
import { getMovies } from "../../services/MovieService";
import MovieCard from "../../components/movieCard/MovieCard";
import Button from "../../components/button/Button";
import { ALL_MOVIES } from "../../constants/AllMovie";
import { AiFillLike } from "react-icons/ai";
import { Bars } from "react-loader-spinner";
import withAdvertisement from "../../hoc/WithAdvertisement";
const AllMovie = (props) => {
  const {
    showAd,
    showAdvertisementNotification,
    showResumeNotification,
    advertisementCountdown,
    resumeCountdown,
    onClickHandler,
  } = props;

  const time = {
    adv: 15,
    res: 5,
    start: false,
  };
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
            setSelectedMovie(0);
          }
        })
        .catch((err) => console.log(err));
    };

    fetchData();
  }, []);
  useEffect(() => {
    onClickHandler(time);
  }, [selectedMovie]);

  const onMoviePosterClickHandler = (data) => {
    setSelectedMovie(data.id - 1);
  };

  const onIncreaseLikeHandler = (data) => {
    const updatedMovieLikes = movies.map((movie) => {
      if (movie.id === data.id) {
        return { ...movie, likes: data.like };
      }
      return movie;
    });
    console.log("clicked", updatedMovieLikes[data.id - 1]);
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
      {!movies ? (
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

          <div className={styles["movie-description"]}>
            {!showAd && (
              <>
                <div className={styles["movie-name"]}>
                  <h1>{movies[selectedMovie]?.movie}</h1>
                  <div
                    className={styles["like"]}
                    onClick={() => {
                      const data = {
                        id: movies[selectedMovie].id,
                        like: movies[selectedMovie].likes + 1,
                      };
                      onIncreaseLikeHandler(data);
                    }}
                  >
                    <AiFillLike />
                  </div>
                </div>
                <h4>{movies[selectedMovie]?.likes} Likes</h4>
                <img src={movies[selectedMovie]?.link} />
                <p className={styles["movie-about"]}>
                  {movies[selectedMovie]?.description}
                </p>

                <h2>ACTORS</h2>
                {movies[selectedMovie]?.actors?.map((item) => (
                  <p>{item}</p>
                ))}
              </>
            )}

            {showAd && (
              <img
                src="/assets/advertisements/large-promos/adv1.png"
                className={styles["ad-img"]}
              />
            )}
            <div className={styles["notification"]}>
              {showAdvertisementNotification && (
                <p>Advertisement in {advertisementCountdown} secs</p>
              )}
              {showResumeNotification && (
                <p>Resume in {resumeCountdown} secs</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default withAdvertisement(AllMovie);
