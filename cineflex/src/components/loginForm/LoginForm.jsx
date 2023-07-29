import React from "react";
import PropTypes from "prop-types";
import styles from "./LoginForm.module.scss";
import InputBox from "../inputbox/InputBox";
import Button from "../button/Button";
import { LOGIN } from "../../constants/Login";
const LoginForm = (props) => {
  return (

   

          <form className={styles["login-form"]}>
          <h1>{LOGIN.title}</h1>
      <p>{LOGIN.description}</p>
        {LOGIN.fields.map((item) => (
          <div>
            <label for="email">{item.label}</label>
            <InputBox placeholder={item.placeHolder} styleName="login-input" />
          </div>
        ))}

        <Button value={LOGIN.button} styleName="login-button" />
      </form>

  );
};

LoginForm.propTypes = {};

export default LoginForm;
