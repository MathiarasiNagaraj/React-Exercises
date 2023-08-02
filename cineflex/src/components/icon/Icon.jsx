import React from 'react'
import PropTypes from 'prop-types'
import styles from './Icon.module.scss'

/**
 * A reusable Icon component.
 * @param {Object} props - Component props.
 * @param {string} props.icon- The icon symbol.
 * @returns {JSX.Element} Button component.
 */

const Icon = props => {
    const{icon}=props
  return (
      <span className={styles["icon"]}>{ icon}</span>
  )
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired
}

export default Icon