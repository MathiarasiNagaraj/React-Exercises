import React from 'react'
import PropTypes from 'prop-types';
import styles from './InputBox.module.scss'

/**
 * 
 * @param {object} props object containing identifier and onchange function
 * @returns 
 */
const InputBox = (props) => {
  const inputHandler = (event) => {
  
    const data = {
      identifier: props.identifier,
      value:event.target.value
    }

    props.onChange(data)
  }

  return (
    <>
      <input type='text' className={styles.input} onBlur={inputHandler} />
      {props.error && <div className={styles.errorBar}>{props.error}</div>}
      </>
  )
}
InputBox.prototype = {
  identifier: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  
};
export default InputBox