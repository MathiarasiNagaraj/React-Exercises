import React from 'react'
import PropTypes from 'prop-types'
import styles from './InputBox.module.scss'
const InputBox = props => {
    const{placeholder,styleName}=props
  return (
  <input placeholder={placeholder}  className={styles[styleName]}></input>
  )
}

InputBox.propTypes = {
    placeholder:PropTypes.string
}

export default InputBox