import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styles from './ContentBox.module.scss';
import { useDispatch, useSelector } from 'react-redux'

const ContentBox = props => {
  const { placeHolder, styleName, value, onChange } = props
  const theme = useSelector(state => state.theme.mode);
  //on Changing pass data to parent component
  const onChangeHandler = (e) => {
    onChange(e.target.value);
  }
  return (
    <textarea placeholder={placeHolder}  className={`${styles[styleName]} ${styles[theme]}`} value={value} onChange={onChangeHandler
    } >
          
</textarea>
  )
}

ContentBox.propTypes = {}

export default ContentBox