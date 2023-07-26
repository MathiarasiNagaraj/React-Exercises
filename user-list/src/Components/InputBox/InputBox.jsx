import React from "react";
import styles from "./InputBox.module.css";

function InputBox(props) {
  return (
    <>
      <input
        type='text'
        placeholder={props.placeholder}
        className={`${styles[props.box]}`}
      ></input>
    </>
  );
}

export default InputBox;
