import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.scss'
const Button = props => {
    const {styleName,value}=props
  return (
      <button className={styles[styleName]}>{ value}</button>
  )
}

Button.propTypes = {}

export default Button