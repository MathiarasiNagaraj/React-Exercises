import React from 'react'
import styles from './NavLinks.module.scss'
import PropTypes from 'prop-types';
/**
 * 
 * @param {string} props list items
 * @returns 
 */
const NavLinks = (props) => {

  return (
      <li className={styles.list}>{ props.list}</li>
  )
}
NavLinks.propTypes = {
  list: PropTypes.string.isRequired,
};


export default NavLinks