import React from 'react'
import PropTypes from 'prop-types'
import { SHORT_TEASER } from '../../constants/Home'
import styles from './ShortTeaser.module.scss'
const ShortTeasers = props => {
    const { data } = props;
    return (
    <div className={styles["short-teaser"]}>
    <h1>{SHORT_TEASER.title}</h1>
    <div>{data}</div>
  </div>
  )
}

ShortTeasers.propTypes = {
  data: PropTypes.shape({
    videoSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}

export default ShortTeasers