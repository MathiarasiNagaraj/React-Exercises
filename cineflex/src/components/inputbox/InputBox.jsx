import React,{forwardRef} from 'react'
import PropTypes from 'prop-types'
import styles from './InputBox.module.scss'
const InputBox = forwardRef((props, ref) => {
  const { placeholder, styleName } = props

  return (
    <input placeholder={placeholder} className={styles[styleName]} ref={ref}></input>
  )
});

InputBox.propTypes = {
    placeholder:PropTypes.string
}

export default InputBox