import React from "react";
import PropTypes from "prop-types";
import styles from "./DropDownBox.module.scss";

/**
 *
 * @param {object} props object containing data,identifier,style,onchange
 * @returns
 */
const DropDownBox = (props) => {
  const optionElements = props.data.map((item) => (
    <option key={item}>{item}</option>
  ));

  const inputHandler = (event) => {
    const data = {
      identifier: props.identifier,
      value: event.target.value,
    };

    props.onChange(data);
  };

  return (
    <>
      <select
        onBlur={inputHandler}
        className={`${styles.dropdown} ${props.class}`}
        defaultValue=""
      >
        <option disabled value="">
          Choose
        </option>
        {optionElements}
      </select>
      {props.error && <div className={styles.errorBar}>{props.error}</div>}
    </>
  );
};

DropDownBox.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  style: PropTypes.object,
  identifier: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default DropDownBox;
