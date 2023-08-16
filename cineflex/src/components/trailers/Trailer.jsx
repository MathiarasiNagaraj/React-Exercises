import React from 'react'
import Button from '../button/Button';
import { useAuthContext } from '../../auth/AuthContext'
import { Link } from "react-router-dom";
import {
    TRAILER
} from "../../constants/Home";
  import styles from './Trailer.module.scss'
const Trailer = () => {
    const { user } = useAuthContext();
  return (
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
  )
}

Trailer.propTypes = {}

export default Trailer