import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./CheckBox.module.scss";
import { useDispatch } from "react-redux";
import { BlogAction } from "../../store/BlogSlice";

const CheckBox = (props) => {
  const dispatch = useDispatch();
  const { label, isChecked } = props;

  //on changing checkbox triggering filter event 
  const onChangeHandler = () => {
    dispatch(BlogAction.filter({ type: label, isChecked: !isChecked }));
  };
  return (
    <div className={styles["check-box"]}>
      <label className={styles["checkbox-container"]}>
        <input type="checkbox" checked={isChecked} onChange={onChangeHandler} />
        <span className={styles["checkmark"]}></span>
        {label} blogs
      </label>
    </div>
  );
};

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  isChecked:PropTypes.bool.isRequired
};

export default CheckBox;
