import React from "react";
import PropTypes from "prop-types";
import styles from "./CheckBox.module.scss";

const CheckBox = (props) => {
  const {label}=props
    return (
      <div className={styles["check-box"]}>
    <label className={styles["checkbox-container"]}>
      <input type="checkbox" />
      <span className={styles["checkmark"]}></span>
      {label}
            </label>
            </div>
  );
};

CheckBox.propTypes = {};

export default CheckBox;
