import React, { useRef } from "react";
import PropTypes from "prop-types";
import styles from "./LoginForm.module.scss";
import InputBox from "../inputbox/InputBox";
import Button from "../button/Button";
import { LOGIN } from "../../constants/Login";
import { useAuthContext } from "../../auth/AuthContext";
const LoginForm = (props) => {
  const { setUser} = useAuthContext();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
const formRef=useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Accessing input element's values using refs
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    setUser(() =>( {
      userEmail: emailValue,
        userPassword:passwordValue
    }))
    formRef.current.reset();
    // Perform any necessary actions with the values
    console.log("Email:", emailValue);
    console.log("Password:", passwordValue);

  };

  return (
    <form className={styles["login-form"]} ref={formRef} onSubmit={handleSubmit}>
      <h1>{LOGIN.title}</h1>
      <p>{LOGIN.description}</p>
 
        <div>
          <label htmlFor="email">{LOGIN.fields[0].label}</label>
          <InputBox
            placeholder={LOGIN.fields[0].placeHolder}
            ref={emailRef}
            styleName="login-input"
          />
        </div>
        <div>
          <label htmlFor="password">{LOGIN.fields[1].label}</label>
          <InputBox
            placeholder={LOGIN.fields[1].placeHolder}
            ref={passwordRef}
            styleName="login-input"
          />
        </div>

      <Button value={LOGIN.button} styleName="login-button" />
    </form>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
