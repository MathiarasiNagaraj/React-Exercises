import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styles from './ContentBox.module.scss';

const ContentBox = forwardRef((props,ref) => {
    const {placeHolder,styleName,value,onChange}=props
  return (
      <textarea placeholder={placeHolder} ref={ref} className={styles[styleName]} value={value} onChange={()=> onChange(ref.current.value)} >
          
</textarea>
  )
})

ContentBox.propTypes = {}

export default ContentBox