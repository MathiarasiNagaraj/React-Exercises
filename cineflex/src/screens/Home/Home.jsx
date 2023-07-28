import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../components/button/Button'
import InputBox from '../../components/inputbox/InputBox'
import {LOTTERY, POSTER, TRAILER } from '../../constants/Home'
import styles from './Home.module.scss'
const Home = props => {
  return (
      <div>
          <div  className={styles["poster"]}>
           <img src={POSTER.url} alt={POSTER.alt} />
         
          </div>
          <div className={styles["lottery"]}>
              <span>{LOTTERY.description}</span>
              <InputBox placeholder={LOTTERY.placeHolder} styleName={ "lottery-input"} />
              <Button value={ LOTTERY.button} styleName={"lottery-button"} />
              </div>
          <div className={styles["container"]}>
          <div className={styles["trailer"]}>
                  <h1>{TRAILER.title}</h1>
                  <p>{TRAILER.description}</p>
                  <div className={styles["movie"]}>
                      <img src={TRAILER.moviePoster} alt={TRAILER.movieTitle}></img>
                      <div>
                          <h1>{TRAILER.movieTitle}</h1>
                          <p>{ TRAILER.movieDescription}</p>
                      </div>
                  </div>
              </div>
              </div>
    </div>
  )
}

Home.propTypes = {}

export default Home