import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.scss'
const Button = props => {
    const { styleName, value,onClick } = props
  return (
      <button className={styles[styleName]} onClick={onClick}>{ value}</button>
  )
}

Button.propTypes = {
  styleName: PropTypes.string,
  value: PropTypes.string.isRequired
}

export default Button