import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.scss'

const Button = props => {
  const{name,styleName}=props
  return (
    <button className={styles[styleName]}>{ name}</button>
  )
}

Button.propTypes = {}

export default Button