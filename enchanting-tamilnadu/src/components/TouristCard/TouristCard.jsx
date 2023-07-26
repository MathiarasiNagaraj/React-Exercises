import React from "react";
import { Link } from "react-router-dom";
import { BUTTON } from "../../constants/component";
import Button from "../Button/Button";
import styles from "./TouristCard.module.scss";
import PropTypes from "prop-types";

/**
 * 
 * @param {object} object of city details
 * @returns Tourist Place Card component
 */
const TouristCard = ({ props }) => {
  return (
    <div className={styles.touristcard}>
      <img
        src={`assets/images/${props.city?.toLowerCase()}.png`}
        alt={props.city}
      ></img>
      <h2 className={styles.title}>{props.place}</h2>
      <p className={styles.city}>{props.city}</p>
      <p className={styles.placeDescripiton}>{props.shortDescription}</p>

      <Link to={`/details?name=${props.city}`}>
        <Button button={BUTTON.readmore}></Button>
      </Link>
    </div>
  );
};
TouristCard.prototype = {
  props: PropTypes.shape({
    city: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    placeDescripiton: PropTypes.string.isRequired,
  }).isRequired,


};

export default TouristCard;
