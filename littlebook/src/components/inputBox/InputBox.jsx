import React from 'react'
import PropTypes from 'prop-types'
import styles from './InputBox.module.scss'

const InputBox = props => {
    const {placeHolder,styleName}=props
  return (
      <input placeholder={ placeHolder} className={styles[styleName]} />
  )
}

InputBox.propTypes = {}

export default InputBox