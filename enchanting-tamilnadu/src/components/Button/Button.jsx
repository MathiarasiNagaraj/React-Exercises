import React from "react";
import styles from "./Button.module.scss";
import PropTypes from "prop-types";

/**
 *
 * @param {*} props Button value
 * @returns  Button component
 */
const Button = (props) => {
  return (
    <button className={`${styles.button}  ${props.class}`} >
      {props.button}
    </button>
  );
};

Button.propTypes = {
  style: PropTypes.object,
  button: PropTypes.string.isRequired,
};

export default Button;
