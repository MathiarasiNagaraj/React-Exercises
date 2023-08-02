import React, { useState, useMemo, useRef } from "react";
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
const Home = () => {
    const [teasers, setTeasers] = useState([]);
    const [number, setNumber] = useState(null);
  const phoneNumberRef = useRef();
  const icons = LANGUAGE_ICONS.icons.map((item) => (
    <Icon icon={item.symbol} key={item.language} />
  ));
  const { user } = useAuthContext();
  useMemo(() => {
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

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const number = parseInt(phoneNumberRef.current.value);
      if (number % 2 === 0) {
        setNumber("even")
      } else {
          setNumber("odd")
    }
  };
  return (
    <div>
      <div className={styles["poster"]}>
        <img src={POSTER.url} alt={POSTER.alt} />
          </div>
          
          <div className={styles["lottery"]}>
              {number ? <p>{(number === 'even' ? LOTTERY.success : LOTTERY.error)}</p> :
                  <div className={styles["lottery-form"]}>
                      <span>{LOTTERY.description}</span>
                      <div >
                          <form onSubmit={onSubmitHandler}>
                              <InputBox
                                  placeholder={LOTTERY.placeHolder}
                                  styleName={"lottery-input"}
                                  ref={phoneNumberRef}
                              />
                              <Button value={LOTTERY.button} styleName={"lottery-button"} />
                          </form>
                      </div>
                  </div>}
      </div>
      <div className={styles["container"]}>
        <div className={styles["trailer"]}>
          <h1>{TRAILER.title}</h1>
          {!user.userEmail ? (
            <p>
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
