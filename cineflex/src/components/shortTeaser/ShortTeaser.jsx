import React from 'react'
import PropTypes from 'prop-types'
import styles from './ShortTeaser.module.scss'
const ShortTeaser = props => {
    const{data}=props
  return (
      <div className={styles["short-teaser-card"]}>
          <div className={styles["video"]}>        <video src={ data.url}  controls="on"/></div>
  
          <h1>{data.title }</h1>

    </div>
  )
}

ShortTeaser.propTypes = {}

export default ShortTeaser