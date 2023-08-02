import React from 'react'
import styles from './NowShowing.module.scss'
import { NOW_SHOWING } from '../../constants/NowShowing'


/**
 * A component that displays a Now showing page
 * @returns {JSX.Element} NowShowing component.
 */


const NowShowing =() => {
  return (
      <div className={styles["now-showing"]}>
          <h4>{ NOW_SHOWING.pageTitle}</h4>
          <h1>{NOW_SHOWING.title}</h1>
          <video src={NOW_SHOWING.url}></video>
          <p>{ NOW_SHOWING.description}</p>
      </div>
  )
}



export default NowShowing