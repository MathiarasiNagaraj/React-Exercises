import React from 'react'
import { SUCCESS_BANNER } from '../../constants/component'
import styles from './SuccessBanner.module.scss'
import PropTypes from 'prop-types';


/**
 * 
 * @param {object} object of user input details
 * @returns success banner component
 */

const SuccessBanner = ({ data }) => {
    const successBannerMessage = SUCCESS_BANNER(data.name, data.source, data.destination);
  return (
<div className={styles.banner}>
<p>{successBannerMessage} </p>
    </div>
  )
}
SuccessBanner.propTypes = {
    data: PropTypes.shape({
      name: PropTypes.string.isRequired,
      source: PropTypes.string.isRequired,
      destination: PropTypes.string.isRequired,
    }).isRequired,
  };
  
export default SuccessBanner;