import React from 'react'
import PropTypes from 'prop-types'
import styles from './ImageBox.module.scss'

const ImageBox = props => {
    const{src,title,styleName}=props
  return (
      <div className={styles[styleName]}>
          <img src={src} alt={ title} />
    </div>
  )
}

ImageBox.propTypes = {}

export default ImageBox