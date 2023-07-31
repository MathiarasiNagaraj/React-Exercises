import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.scss'
const Button = props => {
    const { styleName, value } = props
    console.log(styleName)
    console.log(styles["lotter-button"])
  return (
      <button className={styles[styleName]}>{ value}</button>
  )
}

Button.propTypes = {
  styleName: PropTypes.string,
  value: PropTypes.string.isRequired
}

export default Button