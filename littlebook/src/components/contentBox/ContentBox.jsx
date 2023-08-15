import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styles from './ContentBox.module.scss';

const ContentBox = forwardRef((props,ref) => {
  const { placeHolder, styleName, value, onChange } = props
  const onChangeHandler = (e) => {
    onChange(e.target.value);
   // console.log("calling ", e.target.value)
  }
  return (
    <textarea placeholder={placeHolder} ref={ref} className={styles[styleName]} value={value} onChange={onChangeHandler
    } >
          
</textarea>
  )
})

ContentBox.propTypes = {}

export default ContentBox