import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.scss'

/**
 * A reusable button component.
 * @param {Object} props - Component props.
 * @param {string} props.styleName - The style name to apply to the button.
 * @param {string} props.value - The text value displayed on the button.
 * @param {Function} props.onClick - The click event handler for the button.
 * @returns {JSX.Element} Button component.
 */

const Button = props => {
  const { styleName, value, onClick,disabled } = props
  return (
      <button className={styles[styleName]} onClick={onClick} disabled={disabled}>{ value}</button>
  )
}

Button.propTypes = {
  styleName: PropTypes.string,
  value: PropTypes.string.isRequired,
  onClick:PropTypes.func
}

export default Button