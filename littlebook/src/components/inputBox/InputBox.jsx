import React from 'react'
import PropTypes from 'prop-types'
import styles from './InputBox.module.scss'
import { useDispatch, useSelector } from 'react-redux'

const InputBox = props => {
  const { placeHolder, styleName, value, onChange } = props;
  const theme = useSelector(state => state.theme.mode);
  //on changing input ,passing value to parent component
  const onChangeHandler = (e) => {
    onChange(e.target.value);

  }
  return (
    <input type="text"  placeholder={placeHolder} className= {`${styles[styleName]}  ${styles[theme]}`} value={value} onChange={onChangeHandler} />
  )
};

InputBox.propTypes = {
  placeHolder: PropTypes.string,
  styleName: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange:PropTypes.func
}

export default InputBox