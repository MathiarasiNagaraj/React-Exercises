import React from 'react'
import PropTypes from 'prop-types'
import styles from './Icon.module.scss'
const Icon = props => {
    const{icon}=props
  return (
      <span className={styles["icon"]}>{ icon}</span>
  )
}

Icon.propTypes = {}

export default Icon