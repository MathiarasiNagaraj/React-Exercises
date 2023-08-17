import React from 'react'
import PropTypes from 'prop-types'
import styles from './ImageBox.module.scss'
import { DEFAULT_IMAGE } from '../../constants/GeneralConstant'

const ImageBox = props => {
  const { src, title, styleName } = props
  
  return (
      <div className={styles[styleName]}>
      <img src={src || DEFAULT_IMAGE.url} alt={title}  />
    </div>
  )
}

ImageBox.propTypes = {}

export default ImageBox