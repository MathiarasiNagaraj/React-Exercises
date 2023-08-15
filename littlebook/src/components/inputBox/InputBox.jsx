import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styles from './InputBox.module.scss'

const InputBox = forwardRef((props, ref) => {
  const { placeHolder, styleName, value, onChange } = props;
  const onChangeHandler = (e) => {
    onChange(e.target.value);
   // console.log("calling ", e.target.value)
  }
  return (
    <input type="text" ref={ref} placeholder={placeHolder} className={styles[styleName]} value={value} onChange={onChangeHandler} />
  )
});

InputBox.propTypes = {}

export default InputBox