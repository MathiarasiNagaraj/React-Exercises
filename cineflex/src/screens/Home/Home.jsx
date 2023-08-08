import React, { useState,useEffect } from "react";
import Button from "../../components/button/Button";
import InputBox from "../../components/inputbox/InputBox";
import {
  LANGUAGE_ICONS,
  LOTTERY,
  POSTER,
  SHORT_TEASER,
  TRAILER,
} from "../../constants/Home";
import styles from "./Home.module.scss";
import Icon from "../../components/icon/Icon";
import { getShortTeasers } from "../../services/MovieService";
import ShortTeaser from "../../components/shortTeaser/ShortTeaser";
import { useAuthContext } from "../../auth/AuthContext";
import { Link } from "react-router-dom";
import ErrorBoundary from "../../error/ErrorBoundary";
import Lottery from "../../components/lottery/Lottery";

/**
 * A component that displays Home page content.
 * @returns {JSX.Element} Home component.
 */


const Home = () => {
  const [teasers, setTeasers] = useState([]);
  const icons = LANGUAGE_ICONS.icons.map((item) => (
    <Icon icon={item.symbol} key={item.language} />
  ));
  const { user } = useAuthContext();


//fetching short teaser when component loaded
  useEffect(() => {
    const fetchTeasers = () => {
      getShortTeasers()
        .then((data) => {
          setTeasers(data); // Update the state with the fetched data
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchTeasers();
  }, []);
  const teaser =
    teasers &&
    teasers?.map((item) => <ShortTeaser key={item.id} data={item} />);

  
  //fallback ui
  const MyFallbackComponent = () => {
    return (
      <div className={styles["lottery"]}>
        <p>{LOTTERY.error}</p>
      </div>
    );
  };

  return (
    <div>
      <div className={styles["poster"]}>
        <img src={POSTER.url} alt={POSTER.alt} />
      </div>

      <ErrorBoundary FallbackComponent={<MyFallbackComponent />}>
        <Lottery />
      </ErrorBoundary>
      <div className={styles["container"]}>
        <div className={styles["trailer"]}>
          <h1>{TRAILER.title}</h1>
          {!user.userEmail ? (
            <p className={styles["sign-in"]}>
              {TRAILER.description} <Link to="/login">{TRAILER.link}</Link>
            </p>
          ) : (
            <p></p>
          )}
          <div className={styles["movie"]}>
            <img src={TRAILER.moviePoster} alt={TRAILER.movieTitle}></img>
            <div>
              <h1>{TRAILER.movieTitle}</h1>
              <p>{TRAILER.movieDescription}</p>
              {!user.userEmail ? (
                <Link to="/login">
                  <Button value={TRAILER.button} styleName="watchnow-button" />
                </Link>
              ) : (
                <Link to="/showTime">
                  <Button value={TRAILER.button} styleName="watchnow-button" />
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className={styles["short-teaser"]}>
          <h1>{SHORT_TEASER.title}</h1>
          <div>{teaser}</div>
        </div>
        <div className={styles["language-container"]}>
          <p>{LANGUAGE_ICONS.description}</p>
          <div> {icons}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
