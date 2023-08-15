import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.scss'
import { useSelector } from 'react-redux'

const Button = props => {
  const { name, styleName, onClick } = props
  const theme = useSelector(state => state.theme.mode);
 
  
  return (
    <button className={`${styles[styleName]} ${styles[theme]}`} onClick={onClick}>{ name}</button>
  )
}

Button.propTypes = {}

export default Button