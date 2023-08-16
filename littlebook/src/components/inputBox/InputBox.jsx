import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styles from './InputBox.module.scss'
import { useDispatch, useSelector } from 'react-redux'

const InputBox = forwardRef((props, ref) => {
  const { placeHolder, styleName, value, onChange } = props;
  const theme = useSelector(state => state.theme.mode);
  const onChangeHandler = (e) => {
    onChange(e.target.value);

  }
  return (
    <input type="text" ref={ref} placeholder={placeHolder} className= {`${styles[styleName]}  ${styles[theme]}`} value={value} onChange={onChangeHandler} />
  )
});

InputBox.propTypes = {}

export default InputBox