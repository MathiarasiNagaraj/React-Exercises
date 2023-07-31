import React, { useRef, useState ,useEffect} from 'react'
import PropTypes from 'prop-types'
import styles from './ShortTeaser.module.scss'
import withAdvertisement from '../../hoc/WithAdvertisement'
const ShortTeaser = props => {
  const { data } = props
  const onClickHandler = () => {
  console.log("clicked")
}
  return (
      <div className={styles["short-teaser-card"]}>
      <div className={styles["video"]}>
        <video src={data.videoSrc} controls="on" onClick={onClickHandler} />
      </div>
 
     
          <h1>{data.title }</h1>
           {<p>Advertisement in 5 secs</p>}
    </div>
  )
}

ShortTeaser.propTypes = {}

export default withAdvertisement(ShortTeaser);