import React, { useEffect, useRef } from "react";
import styles from "./LoginForm.module.scss";
import InputBox from "../inputbox/InputBox";
import Button from "../button/Button";
import { LOGIN } from "../../constants/Login";
import { useAuthContext } from "../../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { users } from "../../services/data";

/**
 * A login form component.
 * @returns {JSX.Element} LoginForm component.
 */

const LoginForm = () => {
  //accessing the setUser method from context to set the logged in user details
  const { setUser } = useAuthContext();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const formRef = useRef(null);
  const navigate = useNavigate();
  //form handling -authentication
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;
    //finding the user with given username and password
    const foundUser = users.find(
      (user) =>
        user.userEmail == emailValue && user.userPassword == passwordValue
    );
    //if the user found set that to user in context and navigate to home
    if (foundUser) {
      setUser(() => ({
        userEmail: emailValue,
        userPassword: passwordValue,
        userName:foundUser.name
      }));
      //set the islogged true and user name in localstorage
      localStorage.setItem("islogged", true);
      localStorage.setItem("userName", foundUser.name);
      //after form submission reset the form values
      formRef.current.reset();
      //navigate to the home page
      navigate("/",{replace:true});
    }
  };

  return (
    <form
      className={styles["login-form"]}
      ref={formRef}
      onSubmit={handleSubmit}
    >
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

export default LoginForm;
