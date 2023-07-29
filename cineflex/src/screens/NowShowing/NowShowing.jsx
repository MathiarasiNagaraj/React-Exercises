import React from 'react'
import PropTypes from 'prop-types'
import styles from './NowShowing.module.scss'
import { NOW_SHOWING } from '../../constants/NowShowing'

const NowShowing = props => {
  return (
      <div className={styles["now-showing"]}>
          <h4>{ NOW_SHOWING.pageTitle}</h4>
          <h1>{NOW_SHOWING.title}</h1>
          <video src={NOW_SHOWING.url}></video>
          <p>{ NOW_SHOWING.description}</p>
      </div>
  )
}

NowShowing.propTypes = {}

export default NowShowing