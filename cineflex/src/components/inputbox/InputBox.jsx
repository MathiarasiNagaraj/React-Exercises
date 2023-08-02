import React,{forwardRef} from 'react'
import PropTypes from 'prop-types'
import styles from './InputBox.module.scss'

/**
 * A customizable input box component.
 * @param {Object} props - Component props.
 * @param {string} props.placeholder - The placeholder text for the input.
 * @param {string} props.styleName - The style name to apply to the input.
 * @param {React.Ref} ref - A ref object to forward to the input element.
 * @returns {JSX.Element} InputBox component.
 */

const InputBox = forwardRef((props, ref) => {
  
  const { placeholder, styleName } = props

  return (
    <input placeholder={placeholder} className={styles[styleName]} ref={ref}></input>
  )
});

InputBox.propTypes = {
  placeholder: PropTypes.string,
  styleName:PropTypes.string
}

export default InputBox