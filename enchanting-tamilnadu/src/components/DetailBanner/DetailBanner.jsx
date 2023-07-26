import React from "react";
import styles from "./DetailBanner.module.scss";
import PropTypes from 'prop-types';

/**
 * 
 * @param {object} props object containing city,temperature
 * @returns 
 */
const DetailBanner = (props) => {
   
  return (

      <div className={styles.poster}>
        <div className={styles.posterContent}>
          <h4>{props.data.city}</h4>
              <h3> {props.data.place}</h3>

        </div>
        <p className={styles.temperature}> {props.temperature} <sup>°</sup>C</p>
      </div>
  );
};
DetailBanner.propTypes = {
    data: PropTypes.shape({
      city: PropTypes.string,
      place: PropTypes.string,
    }).isRequired,
    temperature: PropTypes.string.isRequired,
  };
export default DetailBanner;
