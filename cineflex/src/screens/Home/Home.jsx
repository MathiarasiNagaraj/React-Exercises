import React, { useState,useEffect } from "react";

import {
  LANGUAGE_ICONS,
  LOTTERY,
  POSTER,
} from "../../constants/Home";
import styles from "./Home.module.scss";
import Icon from "../../components/icon/Icon";
import { getShortTeasers } from "../../services/MovieService";
import ShortTeaser from "../../components/shortTeaser/ShortTeaser";
import ErrorBoundary from "../../error/ErrorBoundary";
import Lottery from "../../components/lottery/Lottery";
import Trailer from "../../components/trailers/Trailer";
import ShortTeasers from "../../containers/teasers/ShortTeasers";

/**
 * A component that displays Home page content.
 * @returns {JSX.Element} Home component.
 */


const Home = () => {
  const [teasers, setTeasers] = useState([]);
 


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
  //mapping shortTeaser component with teaser data
  const teaser =

    teasers?.map((item) => <ShortTeaser key={teasers.indexOf(item)} data={item} />);
    //mapping Icon component with icon data
    const icons = LANGUAGE_ICONS.icons.map((item) => (
      <Icon icon={item.symbol} key={item.language} />
    ));
  
  //fallback UI Component for Lottery component
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
       <Trailer/>
        <ShortTeasers data={teaser} />
        <div className={styles["language-container"]}>
          <p>{LANGUAGE_ICONS.description}</p>
          <div> {icons}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
