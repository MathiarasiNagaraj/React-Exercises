import React from "react";
import styles from "./BannerContainer.module.scss";
import PropTypes from 'prop-types';

/**
 * 
 * @param {object} props object contain poster
 * @returns 
 */
export const BannerContainer = (props) => {

  return (
  
      <div className={styles.poster}>
        {props.children}
        <div className={styles.posterImage}>
          <img src={`assets/images/${props.poster}`} alt="poster"></img>
        </div>
      </div>

  );
};
BannerContainer.propTypes = {
    children: PropTypes.element.isRequired,
    poster: PropTypes.string.isRequired,
};
BannerContainer.defaultProps = {
  poster:'poster.webp'
}
export default BannerContainer;