import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styles from './InputBox.module.scss'

const InputBox = forwardRef((props, ref) => {
  const { placeHolder, styleName, value, onChange } = props
  return (
    <input type="text" ref={ref} placeholder={placeHolder} className={styles[styleName]} value={value} onChange={() => onChange(ref?.current?.value)} />
  )
});

InputBox.propTypes = {}

export default InputBox