import React from 'react'
import PropTypes from 'prop-types'
import styles from './ContentBox.module.scss';

const ContentBox = props => {
    const {placeHolder,styleName}=props
  return (
      <textarea placeholder={ placeHolder} className={styles[styleName]}>
          
</textarea>
  )
}

ContentBox.propTypes = {}

export default ContentBox